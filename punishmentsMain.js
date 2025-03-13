// punishmentsMain.js
import { punishmentCategories } from './punishments.js';

function renderPunishments() {
  const container = document.getElementById('punishments');
  container.innerHTML = '';
  
  punishmentCategories.forEach((category, index) => {
    // Maak een kaart voor elke strafcategorie
    const card = document.createElement('div');
    card.classList.add('punishment-card');
    
    const title = document.createElement('h2');
    title.textContent = category;
    card.appendChild(title);
    
    container.appendChild(card);
  });
}

renderPunishments();
