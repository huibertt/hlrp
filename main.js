// main.js
import { articles } from './articles.js';

function renderArticles(articlesToRender) {
  const container = document.getElementById('articles');
  container.innerHTML = ''; // Maak de container leeg
  
  articlesToRender.forEach(article => {
    // Maak een artikel-element
    const articleEl = document.createElement('article');
    articleEl.classList.add('article');
    
    // Titel van het artikel
    const header = document.createElement('h2');
    header.textContent = article.label;
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
