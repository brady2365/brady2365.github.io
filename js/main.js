
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
