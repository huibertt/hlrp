import { punishmentCategories } from './punishments.js';

function renderPunishments() {
  const container = document.getElementById('punishments');
  container.innerHTML = '';
  
  // We slaan de eerste placeholder over (indien van toepassing)
  punishmentCategories.forEach((category, index) => {
    if (index === 0) return;
    
    const card = document.createElement('div');
    card.classList.add('punishment-card');
    
    const title = document.createElement('h2');
    title.textContent = category;
    card.appendChild(title);
    
    // Hier kun je echte uitleg invoegen; voorlopig een placeholder
    const explanation = document.createElement('p');
    explanation.textContent = `Beschrijving voor ${category}.`;
    card.appendChild(explanation);
    
    container.appendChild(card);
  });
}

renderPunishments();
