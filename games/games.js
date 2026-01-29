document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {title: "Geometry Dash", url: "/games/play/geometrydash/index.html", image: "https://classroom2111.github.io/img/class-453.png", tags: "new popular"},
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
    {title: "Waterworks", url: "/games/play/waterworks/index.html", image: "https://img.itch.zone/aW1nLzM4OTA2MTIuZ2lm/60x60%23c/mVU4ou.gif", tags: "new"},
    {title: "Geometry Dash: Meltdown", url: "/games/play/gdmeltdown/index.html", image: "https://play-lh.googleusercontent.com/o7hHBVIagQ_rylkmNuIx_sOEzaoAgRSHQhsfBM_C5MV3nJThWC_kkTYaBJJwTnfVc7I=s96-rw", tags: "new"},
    {title: "Slice Master", url: "/games/play/slicemaster/index.html", image: "https://bitlifeonline.github.io/slice-master/logo.png", tags: "new popular"},
    {title: "Soccer Skills World Cup", url: "/games/play/soccerskillsworldcup/index.html", image: "https://geometrydashspam.com/media/uploads/games/thumb/soccer-skills-world-cup.webp", tags: "new popular"},
    {title: "Deer Adventrue", url: "/games/play/deeradventure/index.html", image: "https://deeradventure.io/cache/data/image/game/deer-adventure-m180x180.webp", tags: "new popular"},
    {title: "Steal a Brainrot Online", url: "/games/play/sabonline/index.html", image: "https://geodashlite.io/cache/data/image/game/steal-a-brainrot-unblocked-m330x330.jpg", tags: "new popular"},
    {title: "Getaway Shootout", url: "/games/play/getawayshootout/index.html", image: "https://footballlegends-online.github.io/img/class-479.png", tags: "new popular"},
    {title: "Music", url: "/games/play/music/index.html", image: "data:image/png;base64,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", tags: "new popular"},
    
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
