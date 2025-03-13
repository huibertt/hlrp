import { punishmentCategories } from './punishments.js';

function renderPunishments() {
  const container = document.getElementById('punishments');
  container.innerHTML = '';
  
  punishmentCategories.forEach((category, index) => {
    const card = document.createElement('div');
    card.classList.add('punishment-card');
    
    const title = document.createElement('h2');
    title.textContent = category;
    card.appendChild(title);
    
    // Voeg een voorbeeldbeschrijving toe (pas dit aan met de echte uitleg indien beschikbaar)
    const explanation = document.createElement('p');
    explanation.textContent = `Beschrijving voor ${category}.`;
    card.appendChild(explanation);
    
    container.appendChild(card);
  });
}

renderPunishments();
