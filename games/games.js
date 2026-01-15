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
            <a href="${g.url}" class="game-link">
                <div class="game-box">
                    <img class="game-image" src="${g.image}" alt="${escapeHtml(g.title)}">
                    <div class="game-title">${escapeHtml(g.title)}</div>
                </div>
            </a>
        </div>
    `;
}

games.forEach(g => container.insertAdjacentHTML('beforeend', createCardHTML(g)));
