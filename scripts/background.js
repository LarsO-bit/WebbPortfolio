let offset = 0;

function animateGround() {
    offset += 0.4;
    document.documentElement.style.setProperty("--ground-offset", `${offset}px`);
    requestAnimationFrame(animateGround);
}

animateGround();