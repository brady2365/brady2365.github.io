document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {title: "Geometry Dash", url: "/games/play/geometrydash/index.html", image: "https://classroom2111.github.io/img/class-453.png", tags: "popular"},
    {title: "Retro Bowl", url: "/games/play/retrobowl/index.html", image: "https://classroom2111.github.io/img/class-400.png", tags: "popular"},
    {title: "Slope", url: "/games/play/slope/index.html", image: "https://classroom2111.github.io/img/class-450.png", tags: "popular"},
    
  ];

  const container = document.getElementById("gameContainer");
  if (!container) {
    console.error("gameContainer not found");
    return;
  }

  // CREATE GAME CARDS
  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.dataset.tags = game.tags;

    card.innerHTML = `
      <a href="${game.url}" class="game-link">
        <div class="game-box">
          <img src="${game.image}" alt="${game.title}" class="game-image">
        </div>
        <div class="game-title">${game.title}</div>
      </a>
    `;

    container.appendChild(card);
  });

  // OPTIONAL: Make sure gameCards variable in main.js works after creation
  // If main.js runs first, wrap filter logic in a function that queries dynamically:
  window.updateGameCards = () => document.querySelectorAll(".game-card");
});
