// Dados mockados das prateleiras
const shelves = [
    { id: 1, name: "Prateleira A1", capacity: 100, usedSpace: 75 },
    { id: 2, name: "Prateleira B1", capacity: 100, usedSpace: 92 },
    { id: 3, name: "Prateleira C1", capacity: 100, usedSpace: 45 },
    { id: 4, name: "Prateleira D1", capacity: 100, usedSpace: 60 },
    { id: 5, name: "Prateleira E1", capacity: 100, usedSpace: 30 },
    { id: 6, name: "Prateleira F1", capacity: 100, usedSpace: 88 }
];

// Função para criar um card de prateleira
function createShelfCard(shelf) {
    const usagePercentage = (shelf.usedSpace / shelf.capacity) * 100;
    
    const card = document.createElement('div');
    card.className = 'shelf-card';
    
    card.innerHTML = `
        <div class="shelf-header">
            <h2>${shelf.name}</h2>
        </div>
        <div class="shelf-content">
            <div class="shelf-info">
                <div>
                    <span>Capacidade:</span>
                    <span>${shelf.capacity} itens</span>
                </div>
                <div>
                    <span>Em uso:</span>
                    <span>${shelf.usedSpace} itens</span>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill ${usagePercentage > 90 ? 'warning' : ''}" 
                     style="width: ${usagePercentage}%">
                </div>
            </div>
            <div class="usage-text">
                ${usagePercentage.toFixed(1)}% utilizado
            </div>
        </div>
    `;
    
    return card;
}

// Função para renderizar todas as prateleiras
function renderShelves() {
    const container = document.getElementById('shelvesContainer');
    shelves.forEach(shelf => {
        container.appendChild(createShelfCard(shelf));
    });
}

// Inicializar o dashboard quando a página carregar
document.addEventListener('DOMContentLoaded', renderShelves);