const container = document.getElementById('gameContainer');

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function createCardHTML(g) {
    return `
        <div class="game-card" data-title="${escapeHtml(g.title)}">
            <h3>${escapeHtml(g.title)}</h3>
            <iframe id="${g.id}" class="game-frame" allowfullscreen></iframe>
            <div class="overlay" onclick="loadGame('${g.id}','${g.url}', this)">Play</div>
            <button class="fullscreen-button" onclick="fullscreenFrame('${g.id}')">Fullscreen</button>
        </div>
    `;
}

games.forEach(g =>
    container.insertAdjacentHTML('beforeend', createCardHTML(g))
);

function loadGame(frameId, url, overlayEl) {
    const iframe = document.getElementById(frameId);
    if (!iframe) return;

    iframe.src = url;
    if (overlayEl) overlayEl.style.display = 'none';
}

function fullscreenFrame(frameId) {
    const iframe = document.getElementById(frameId);
    if (!iframe) return;

    try {
        iframe.requestFullscreen?.() ||
        iframe.webkitRequestFullscreen?.() ||
        iframe.msRequestFullscreen?.();
    } catch (e) {
        console.warn("Fullscreen failed", e);
    }
}

function searchGames() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();

    document.querySelectorAll('.game-card').forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(q) ? 'block' : 'none';
    });
}

document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        this.value = '';
        searchGames();
    }
});
