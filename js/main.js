document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filters button");
  const gameCards = document.querySelectorAll(".game-card");

  let activeFilter = "all";

  /* ===== FILTER BUTTONS ===== */
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      // update active button UI
      filterButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      filterGames();
    });
  });

  /* ===== SEARCH BAR (FORCES ALL) ===== */
  searchInput.addEventListener("input", () => {
    activeFilter = "all";

    filterButtons.forEach(b => b.classList.remove("active"));
    document.querySelector('[data-filter="all"]').classList.add("active");

    filterGames();
  });

  /* ===== MAIN FILTER FUNCTION ===== */
  function filterGames() {
    const searchText = searchInput.value.toLowerCase();

    gameCards.forEach(card => {
      const titleEl = card.querySelector(".game-title");
      const title = titleEl ? titleEl.innerText.toLowerCase() : "";
      const tags = card.dataset.tags || "";

      const matchesSearch = title.includes(searchText);
      const matchesFilter =
        activeFilter === "all" || tags.includes(activeFilter);

      card.style.display =
        matchesSearch && matchesFilter ? "block" : "none";
    });
  }
});
