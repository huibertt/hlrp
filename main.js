import { articles } from './articles.js';
import { punishmentCategories } from './punishments.js';

function renderArticles(articlesToRender) {
  const container = document.getElementById('articles');
  container.innerHTML = ''; // Leegmaken van de container
  
  articlesToRender.forEach(article => {
    const articleEl = document.createElement('article');
    articleEl.classList.add('article');
    
    // Titel + strafcategorie (met custom tooltip)
    const header = document.createElement('h2');
    header.textContent = article.label;
    
    if (article.punishmentCategory) {
      const cat = article.punishmentCategory;
      const categorySpan = document.createElement('span');
      categorySpan.classList.add('punishment-category');
      categorySpan.textContent = ` (Straf categorie: ${cat})`;
      const catIndex = parseInt(cat, 10);
      categorySpan.setAttribute('data-tooltip', punishmentCategories[catIndex] || "");
      header.appendChild(categorySpan);
    }
    articleEl.appendChild(header);
    
    // Beschrijving
    if (article.description) {
      const desc = document.createElement('p');
      desc.innerHTML = article.description; // innerHTML voor HTML-tags
      articleEl.appendChild(desc);
    }
    
    // Hoofd-lijstitems (article.list)
    if (article.list && Array.isArray(article.list)) {
      const ul = document.createElement('ul');
      article.list.forEach(item => {
        if (typeof item === 'string') {
          // Gewone string -> normale <li>
          const li = document.createElement('li');
          li.innerHTML = item;
          ul.appendChild(li);
        } else if (typeof item === 'object' && item.sublist && Array.isArray(item.sublist)) {
          // Object met sublist -> maak geneste <ul>
          const li = document.createElement('li');
          li.classList.add('sublist-parent');
          const nestedUl = document.createElement('ul');
        
          item.sublist.forEach(nestedItem => {
            const nestedLi = document.createElement('li');
            nestedLi.innerHTML = nestedItem;
            nestedUl.appendChild(nestedLi);
          });
          li.appendChild(nestedUl);
          ul.appendChild(li);
        }
      });
      articleEl.appendChild(ul);
    }

    // Subartikelen (article.subarticles)
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

    // Voeg het artikel toe aan de container
    container.appendChild(articleEl);
  });
}

// Eerst alle artikelen renderen
renderArticles(articles);

// Live zoekfunctionaliteit
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  
  const filteredArticles = articles.filter(article => {
    const inLabel = article.label.toLowerCase().includes(query);
    const inDescription = article.description && article.description.toLowerCase().includes(query);
    let inList = false;
    if (article.list && Array.isArray(article.list)) {
      inList = article.list.some(item => {
        if (typeof item === 'string') {
          return item.toLowerCase().includes(query);
        } else if (typeof item === 'object' && item.sublist && Array.isArray(item.sublist)) {
          return item.sublist.some(nestedItem => nestedItem.toLowerCase().includes(query));
        }
      });
    }
    
    let inSubarticles = false;
    if (article.subarticles) {
      inSubarticles = article.subarticles.some(sub => {
        const subLabel = sub.label.toLowerCase().includes(query);
        const subDescription = sub.description && sub.description.toLowerCase().includes(query);
        let subList = false;
        if (sub.list && Array.isArray(sub.list)) {
          subList = sub.list.some(item => item.toLowerCase().includes(query));
        }
        return subLabel || subDescription || subList;
      });
    }
    
    return inLabel || inDescription || inList || inSubarticles;
  });
  
  renderArticles(filteredArticles);
});
