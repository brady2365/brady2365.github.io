document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {title: "Geometry Dash", url: "/games/play/geometrydash/index.html", image: "https://classroom2111.github.io/img/class-453.png", tags: "popular"},
    {title: "Retro Bowl", url: "/games/play/retrobowl/index.html", image: "https://classroom2111.github.io/img/class-400.png", tags: "popular"},
    {title: "Slope", url: "/games/play/slope/index.html", image: "https://classroom2111.github.io/img/class-450.png", tags: "popular"},
    {title: "Youtube", url: "/games/play/youtube/index.html", image: "https://city-png.b-cdn.net/preview/preview_public/temp/youtube-logo-yt-square-red-11717196163ympx8uzhdt.webp", tags: "popular"},
    {title: "Bitlife", url: "/games/play/bitlife/index.html", image: "https://classroom2111.github.io/img/class-441.png", tags: "popular"},
    {title: "Escape Road 1", url: "/games/play/escaperoad1/index.html", image: "https://escaperoad.io/data/image/options/escape-road-logo.jpg", tags: "popular"},
    {title: "Escape Road 2", url: "/games/play/escaperoad2/index.html", image: "https://escaperoad.io/data/image/options/escape-road-logo.jpg", tags: "popular"},
    {title: "Crossy Road", url: "/games/play/crossyroad/index.html", image: "https://classroom2111.github.io/img/class-402.png", tags: "popular"},
    {title: "Ovo", url: "/games/play/ovo/index.html", image: "https://classroom2111.github.io/img/class-456.png", tags: "popular"},
    
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
