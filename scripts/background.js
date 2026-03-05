let offset = 0;

function animateGround() {
    offset += 0.4;
    document.documentElement.style.setProperty("--ground-offset", `${offset}px`);
    requestAnimationFrame(animateGround);
}

animateGround();

const toggleBtn = document.getElementById("music-toggle");
const menu = document.getElementById("music-menu");
const audio = document.getElementById("music");
const songs = document.querySelectorAll(".song");

toggleBtn.addEventListener("click", function() {
  if (menu.classList.contains("hidden-menu")) {
    menu.classList.remove("hidden-menu");
  } else {
    menu.classList.add("hidden-menu");
  }
});

songs.forEach(song => {
  song.addEventListener("click", () => {
    const src = song.getAttribute("data-src");
    audio.src = src;
    audio.play();
    menu.classList.add("hidden-menu");
  });
});