const games = [
    { title: "Retro Bowl", url: "/games/retrobowl.html", image: "assets/retrobowl.png" },
    { title: "Slope", url: "/games/slope.html", image: "assets/slope.png" },
    { title: "Stickman Hook", url: "/games/stickman.html", image: "assets/stickman.png" },
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
