document.addEventListener("DOMContentLoaded", () => {
  const games = [
  {
    title: "Retro Bowl",
    url: "/games/retrobowl/index.html",
    image: "https://classroom2111.github.io/img/class-400.png",
    tags: "popular"
  },
  {
    title: "Slope",
    url: "/games/slope/index.html",
    image: "/games/slope/icon.png",
    tags: "new"
  },
  {
    title: "Geometry Dash",
    url: "/games/gd/index.html",
    image: "/games/gd/icon.png",
    tags: "popular underrated"
  }
];

  const container = document.getElementById("gameContainer");
  if (!container) {
    console.error("gameContainer not found");
    return;
  }

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
});
