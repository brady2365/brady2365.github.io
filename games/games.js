document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {title: "Geometry Dash", url: "/games/play/geometrydash/index.html", image: "https://classroom2111.github.io/img/class-453.png", tags: "popular"},
    {title: "Retro Bowl", url: "/games/play/retrobowl/index.html", image: "https://classroom2111.github.io/img/class-400.png", tags: "popular"},
    {title: "Slope", url: "/games/play/slope/index.html", image: "https://classroom2111.github.io/img/class-450.png", tags: "popular"},
    {title: "Youtube", url: "/games/play/youtube/index.html", image: "https://city-png.b-cdn.net/preview/preview_public/temp/youtube-logo-yt-square-red-11717196163ympx8uzhdt.webp", tags: "popular"},
    {title: "Bitlife", url: "/games/play/bitlife/index.html", image: "https://classroom2111.github.io/img/class-441.png", tags: "popular"},
    {title: "Escape Road 1", url: "/games/play/escaperoad1/index.html", image: "https://escaperoad.io/data/image/options/escape-road-logo.jpg", tags: "popular"},
    {title: "Escape Road 2", url: "/games/play/escaperoad2/index.html", image: "https://imgs.crazygames.com/escape-road-2_1x1/20251121100622/escape-road-2_1x1-cover?format=auto&quality=100&metadata=none&width=1200", tags: "popular"},
    {title: "Crossy Road", url: "/games/play/crossyroad/index.html", image: "https://classroom2111.github.io/img/class-402.png", tags: "popular"},
    {title: "Ovo", url: "/games/play/ovo/index.html", image: "https://classroom2111.github.io/img/class-456.png", tags: "popular"},
    {title: "Arc", url: "/games/play/arc/index.html", image: "https://classroom2111.github.io/img/class-12.png", tags: "popular"},
    {title: "Cookie Clicker", url: "/games/play/cookieclicker/index.html", image: "https://classroom2111.github.io/img/class-448.png", tags: "popular"},
    {title: "Spacebar Clicker", url: "/games/play/spacebarclicker/index.html", image: "https://spacebar-clicker.gitlab.io/images/spacebarclicker.png", tags: "popular"},
    {title: "Level Devil", url: "/games/play/leveldevil/index.html", image: "https://classroom2111.github.io/img/class-356.png", tags: "popular"},
    {title: "Escape the Prison", url: "/games/play/escapetheprison/index.html", image: "https://classroom2111.github.io/img/class-780.png", tags: "popular"},
    {title: "We Become What We Behold", url: "/games/play/webecomewhatwebehold/index.html", image: "https://classroom2111.github.io/img/class-485.png", tags: "popular"},
    {title: "Super Mario Bros", url: "/games/play/supermariobros/index.html", image: "https://classroom2111.github.io/img/class-826.png", tags: "popular"},
    {title: "Baseball Bros", url: "/games/play/baseballbros/index.html", image: "https://holeonline.io/cache/data/image/game/baseball-bros-io-m197x197.jpg", tags: "popular"},
    {title: "Soccer Bros", url: "/games/play/soccerbros/index.html", image: "https://thaka.bing.com/th?id=OCGE.9mt12wj46kfp_v3_main_webp&w=124&h=124&qlt=80&c=0&rs=1", tags: "popular"},
    {title: "Basket Bros", url: "/games/play/basketbros/index.html", image: "https://basketbros-game.github.io/images/logo.png", tags: "popular"},
    {title: "Football Bros", url: "/games/play/footballbros/index.html", image: "https://izigames.net/uploads/2025/4/football-bros-game-unblocked.jpg", tags: "popular"},
    {title: "Wrestle Bros", url: "/games/play/wrestlebros/index.html", image: "https://game.imgbear.xyz/thumbnails/4e087881-a09d-4ca2-896d-ebc6cb08ea6c-thumbnail.png", tags: "popular"},
    {title: "Monkey Mart", url: "/games/play/monkeymart/index.html", image: "https://classroom2111.github.io/img/class-829.png", tags: "popular"},
    {title: "Friday Night Funkin'", url: "/games/play/fridaynightfunkin/index.html", image: "https://classroom2111.github.io/img/class-348.png", tags: "popular"},
    {title: "Stickman Hook", url: "/games/play/stickmanhook/index.html", image: "https://classroom2111.github.io/img/class-406.png", tags: "popular"},
    {title: "Rocket League", url: "/games/play/rocketleague/index.html", image: "https://classroom2111.github.io/img/class-527.png", tags: "popular"},
    {title: "Dritft Boss", url: "/games/play/driftboss/index.html", image: "https://classroom2111.github.io/img/class-472.png", tags: "popular"},
    {title: "Snow Rider", url: "/games/play/snowrider/index.html", image: "https://classroom2111.github.io/img/class-537.png", tags: "popular"},
    {title: "Race Royale", url: "/games/play/raceroyale/index.html", image: "https://survival-race.io/cache/data/image/game/survival-race-f141x141.webp", tags: "popular"},
    {title: "Steal a Brainrot", url: "/games/play/stealabrainrot/index.html", image: "https://stealabrainrot-game.github.io/rs/imgs/screenshot-2025-09-09-120259.png", tags: "popular"},
    {title: "Vex 7", url: "/games/play/vex7/index.html", image: "https://vex7game.github.io/wp-content/uploads/2024/12/vex7-150x150.jpg", tags: "popular"},
    {title: "Tiny Fishing", url: "/games/play/tinyfishing/index.html", image: "https://classroom2111.github.io/img/class-451.png", tags: "popular"},
    {title: "Subway Surfers", url: "/games/play/subwaysurfers/index.html", image: "https://classroom2111.github.io/img/class-444.png", tags: "popular"},
    {title: "Drift Hunters", url: "/games/play/drifthunters/index.html", image: "https://classroom2111.github.io/img/class-447.png", tags: "underrated"},
    {title: "A Small World Cup", url: "/games/play/asmallworldcup/index.html", image: "https://classroom2111.github.io/img/class-423.png", tags: "underrated"},
    {title: "UltraKill", url: "/games/play/ultrakill/index.html", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ef1af63-5387-4149-9fc7-91af014f7541/dfwf1br-3cbdfbd8-65bd-4a56-b4d1-6c26b7133f8c.png/v1/fit/w_512,h_512/ultrakill_dock_icon_by_usednoo25_dfwf1br-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6Ii9mLzhlZjFhZjYzLTUzODctNDE0OS05ZmM3LTkxYWYwMTRmNzU0MS9kZndmMWJyLTNjYmRmYmQ4LTY1YmQtNGE1Ni1iNGQxLTZjMjZiNzEzM2Y4Yy5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fbsdfYgDBTwd6_W1Yl-pukbOV7Rfk9DG7tbGgG6S70M", tags: "popular"},
    {title: "Spectrum", url: "/games/play/spectrum/index.html", image: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/6cb069adc75fea6063429b590388701e/spectrum.png", tags: "underrated"},
    {title: "Chicken Merge", url: "/games/play/chickenmerge/index.html", image: "https://classroom2111.github.io/img/class-641.png", tags: "popular underrated"},
    {title: "Infinite Craft", url: "/games/play/infinitecraft/index.html", image: "https://eaglercraftminecraft.github.io/rs/imgs/infinite-craft.png", tags: "popular"},
    {title: "Minecraft", url: "/games/play/minecraft/index.html", image: "https://eaglercraftminecraft.github.io/rs/imgs/minecraft.jpeg", tags: "popular"},
    {title: "Waterworks", url: "/games/play/waterworks/index.html", image: "https://www.experimonkey.com/games/swf-games/waterworks/waterworks.jpg", tags: "new"},
    {title: "Geometry Dash: Meltdown", url: "/games/play/gdmeltdown/index.html", image: "https://play-lh.googleusercontent.com/o7hHBVIagQ_rylkmNuIx_sOEzaoAgRSHQhsfBM_C5MV3nJThWC_kkTYaBJJwTnfVc7I=s96-rw", tags: "new"},
    {title: "Geometry Dash: Other", url: "/games/play/gdother/index.html", image: "https://classroom2111.github.io/img/class-453.png", tags: "new"},
    
    
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
