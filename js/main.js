const games = [
    { title: "Retro Bowl", url: "/games/retrobowl/index.html", image: "https://classroom2111.github.io/img/class-400.png" },
    { title: "Slope", url: "/games/slope/index.html", image: "https://classroom2111.github.io/img/class-450.png" },
    { title: "Geometry Dash", url: "/games/geometrydash/index.html", image: "https://classroom2111.github.io/img/class-453.png" },
    // add more games here
];

const container = document.getElementById('gameContainer');

function escapeHtml(str) {
    return str.replace(/&/g,'&amp;')
              .replace(/</g,'&lt;')
              .replace(/>/g,'&gt;')
              .replace(/"/g,'&quot;');
}

function createCardHTML(g) {
    return `
        <div class="game-card" data-title="${escapeHtml(g.title)}">
            <a href="${g.url}">
                <img src="${g.image}" alt="${escapeHtml(g.title)}" style="width:100%; border-radius:10px;">
                <h3>${escapeHtml(g.title)}</h3>
            </a>
        </div>
    `;
}

games.forEach(g => container.insertAdjacentHTML('beforeend', createCardHTML(g)));

function searchGames() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    document.querySelectorAll('.game-card').forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(q) ? 'block' : 'none';
    });
}

document.getElementById('searchInput').addEventListener('input', searchGames);
document.getElementById('searchInput').addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        this.value = '';
        searchGames();
    }
});
