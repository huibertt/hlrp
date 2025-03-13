// punishmentsMain.js
import punishments from './punishments.js';

function renderPunishments() {
  const container = document.getElementById('punishments');
  container.innerHTML = ''; // Maak de container leeg
  
  punishments.forEach(punishment => {
    const punishmentDiv = document.createElement('div');
    punishmentDiv.classList.add('punishment');
    
    const title = document.createElement('h2');
    title.textContent = punishment.title;
    
    const description = document.createElement('p');
    description.textContent = punishment.description;
    
    punishmentDiv.appendChild(title);
    punishmentDiv.appendChild(description);
    container.appendChild(punishmentDiv);
  });
}

renderPunishments();
