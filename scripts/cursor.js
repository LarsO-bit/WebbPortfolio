
const coord = { x: 0, y: 0 };
const circleCount = 20;
const circles = [];
const circleDelay = 0.3;

for (let i = 0; i < circleCount; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);
    circles.push(circle);  // Jag tolkar som att push sparar objeketet i min circles array, verkar fungera...

    circle.x = 0;
    circle.y = 0;
}

window.addEventListener("mousemove", function(e){
    coord.x = e.clientX + window.scrollX;
    coord.y = e.clientY + window.scrollY;
});

function animateTrail() {

    let x = coord.x;
    let y = coord.y;

    circles.forEach(function(circle, index){
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x+= (nextCircle.x - x) * circleDelay;
        y+= (nextCircle.y - y) * circleDelay;

        circle.style.scale = (circles.length - index) / circles.length;
       
        circle.style.background = "#00f7ff";
        circle.style.boxShadow = `
        0 0 4px #00f7ff,
        0 0 20px #00f7ff,
        0 0 40px #00f7ff
        `;
        
    });

    requestAnimationFrame(animateTrail)
}

animateTrail();