document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterSpans = document.querySelectorAll(".filters .filter");
  const gameCards = document.querySelectorAll(".game-card");

  let activeFilter = "all";

  // FILTERS CLICK
  filterSpans.forEach(span => {
    span.addEventListener("click", () => {
      activeFilter = span.dataset.filter;

      filterSpans.forEach(s => s.classList.remove("active"));
      span.classList.add("active");

      filterGames();
    });
  });

  // SEARCH BAR (forces "all" filter)
  searchInput.addEventListener("input", () => {
    activeFilter = "all";
    filterSpans.forEach(s => s.classList.remove("active"));
    document.querySelector('.filters .filter[data-filter="all"]').classList.add("active");
    filterGames();
  });

  function filterGames() {
    const searchText = searchInput.value.toLowerCase();

    gameCards.forEach(card => {
      const title = card.querySelector(".game-title")?.innerText.toLowerCase() || "";
      const tags = card.dataset.tags?.toLowerCase() || "";

      const matchesSearch = title.includes(searchText);
      const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);

      card.style.display = matchesSearch && matchesFilter ? "" : "none";
    });
  }
});
