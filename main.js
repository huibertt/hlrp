// main.js
import articles from './articles.js';

// Functie om artikelen te renderen in de #articles container
function renderArticles(articlesToRender) {
  const container = document.getElementById('articles');
  container.innerHTML = ''; // Maak de container leeg
  
  articlesToRender.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');
    
    const title = document.createElement('h2');
    title.textContent = article.title;
    
    const content = document.createElement('p');
    content.textContent = article.content;
    
    articleDiv.appendChild(title);
    articleDiv.appendChild(content);
    container.appendChild(articleDiv);
  });
}

// Initieel renderen van alle artikelen
renderArticles(articles);

// Live zoekfunctionaliteit
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  
  // Filter de artikelen op titel of inhoud
  const filteredArticles = articles.filter(article => {
    return article.title.toLowerCase().includes(query) ||
           article.content.toLowerCase().includes(query);
  });
  
  renderArticles(filteredArticles);
});
