document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filters button");
  const gameCards = document.querySelectorAll(".game-card");

  let activeFilter = "all";

  /* FILTER BUTTONS */
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      filterGames();
    });
  });

  /* SEARCH (FORCES ALL) */
  searchInput.addEventListener("input", () => {
    activeFilter = "all";

    filterButtons.forEach(b => b.classList.remove("active"));
    document
      .querySelector('.filters button[data-filter="all"]')
      .classList.add("active");

    filterGames();
  });

  function filterGames() {
    const searchText = searchInput.value.toLowerCase();

    document.querySelectorAll(".game-card").forEach(card => {
      const title =
        card.querySelector(".game-title")?.innerText.toLowerCase() || "";
      const tags = card.dataset.tags || "";

      const matchesSearch = title.includes(searchText);
      const matchesFilter =
        activeFilter === "all" || tags.includes(activeFilter);

      card.style.display =
        matchesSearch && matchesFilter ? "" : "none";
    });
  }
});

const filterSpans = document.querySelectorAll('.filters .filter');

filterSpans.forEach(span => {
  span.addEventListener('click', () => {
    filterSpans.forEach(s => s.classList.remove('active'));
    span.classList.add('active');

    const filter = span.dataset.filter;
    showFilteredGames(filter);
  });
});

function showFilteredGames(filter) {
  console.log("Selected filter:", filter);
  // your existing game filtering logic here
}
