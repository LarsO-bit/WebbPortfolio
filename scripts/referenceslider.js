const cards = document.querySelectorAll(".reference-card");
const left = document.querySelector(".ref-arrow.left");
const right = document.querySelector(".ref-arrow.right");

let index = 0;

function showCard(i){

    cards.forEach(card => card.classList.remove("active"));

    cards[i].classList.add("active");

}

right.addEventListener("click", () => {

    index++;

    if(index >= cards.length){
        index = 0;
    }

    showCard(index);

});

left.addEventListener("click", () => {

    index--;

    if(index < 0){
        index = cards.length - 1;
    }

    showCard(index);

});