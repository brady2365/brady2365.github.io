document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      title: "Retro Bowl",
      url: "/games/retrobowl/index.html",
      tags: "popular"
    },
    {
      title: "Geometry Dash",
      url: "/games/gd/index.html",
      tags: "popular underrated"
    },
    {
      title: "Slope",
      url: "/games/slope/index.html",
      tags: "new"
    },
    {
      title: "Random Game",
      url: "/games/random/index.html",
      tags: ""
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
        <div class="game-title">${game.title}</div>
      </a>
    `;

    container.appendChild(card);
  });
});
