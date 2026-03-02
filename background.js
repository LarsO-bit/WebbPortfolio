let offset = 0;

function animateGround() {
    offset += 0.4;
    document.documentElement.style.setProperty("--ground-offset", `${offset}px`);
    requestAnimationFrame(animateGround);
}

animateGround();

const music = document.getElementById("bgMusic");
const button = document.getElementById("musicToggle");

let isPlaying = false;

button.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        button.textContent = "⏸";
        isPlaying = true;
    } else {
        music.pause();
        button.textContent = "🎵";
        isPlaying = false;
    }
});