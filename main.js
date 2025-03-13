import { articles } from './articles.js';
import { punishmentCategories } from './punishments.js';

function renderArticles(articlesToRender) {
  const container = document.getElementById('articles');
  container.innerHTML = ''; // Maak de container leeg
  
  articlesToRender.forEach(article => {
    const articleEl = document.createElement('article');
    articleEl.classList.add('article');
    
    // Titel en strafcategorie (als tooltip)
    const header = document.createElement('h2');
    header.textContent = article.label;
    
    if (article.punishmentCategory) {
      const cat = article.punishmentCategory;
      const categorySpan = document.createElement('span');
      categorySpan.classList.add('punishment-category');
      categorySpan.textContent = ` (Straf categorie: ${cat})`;
      const catIndex = parseInt(cat, 10);
      // Gebruik data-tooltip voor custom tooltip via CSS
      categorySpan.setAttribute('data-tooltip', punishmentCategories[catIndex] || "");
      header.appendChild(categorySpan);
    }
    articleEl.appendChild(header);
    
    // Beschrijving
    if (article.description) {
      const desc = document.createElement('p');
      desc.textContent = article.description;
      articleEl.appendChild(desc);
    }
    
    // Lijst-items (indien aanwezig)
    if (article.list && Array.isArray(article.list)) {
      const ul = document.createElement('ul');
      article.list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      articleEl.appendChild(ul);
    }
    
    // Subartikelen
    if (article.subarticles && Array.isArray(article.subarticles)) {
      article.subarticles.forEach(sub => {
        const subarticleEl = document.createElement('div');
        subarticleEl.classList.add('subarticle');
        
        const subHeader = document.createElement('h3');
        subHeader.textContent = sub.label;
        
        if (sub.punishmentCategory) {
          const subCat = sub.punishmentCategory;
          const subCategorySpan = document.createElement('span');
          subCategorySpan.classList.add('punishment-category');
          subCategorySpan.textContent = ` (Straf categorie: ${subCat})`;
          const subCatIndex = parseInt(subCat, 10);
          subCategorySpan.setAttribute('data-tooltip', punishmentCategories[subCatIndex] || "");
          subHeader.appendChild(subCategorySpan);
        }
        subarticleEl.appendChild(subHeader);
        
        if (sub.description) {
          const subDesc = document.createElement('p');
          subDesc.textContent = sub.description;
          subarticleEl.appendChild(subDesc);
        }
        
        if (sub.list && Array.isArray(sub.list)) {
          const subUl = document.createElement('ul');
          sub.list.forEach(subItem => {
            const subLi = document.createElement('li');
            subLi.textContent = subItem;
            subUl.appendChild(subLi);
          });
          subarticleEl.appendChild(subUl);
        }
        articleEl.appendChild(subarticleEl);
      });
    }
    container.appendChild(articleEl);
  });
}

// Initieel renderen van alle artikelen
renderArticles(articles);

// Live zoekfunctionaliteit
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  
  const filteredArticles = articles.filter(article => {
    const inLabel = article.label.toLowerCase().includes(query);
    const inDescription = article.description && article.description.toLowerCase().includes(query);
    const inList = article.list && article.list.some(item => item.toLowerCase().includes(query));
    
    let inSubarticles = false;
    if (article.subarticles) {
      inSubarticles = article.subarticles.some(sub => {
        const subLabel = sub.label.toLowerCase().includes(query);
        const subDescription = sub.description && sub.description.toLowerCase().includes(query);
        const subList = sub.list && sub.list.some(item => item.toLowerCase().includes(query));
        return subLabel || subDescription || subList;
      });
    }
    
    return inLabel || inDescription || inList || inSubarticles;
  });
  
  renderArticles(filteredArticles);
});
