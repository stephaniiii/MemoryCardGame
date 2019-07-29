const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard=false;
let firstCard,secondCard;

//card flip
function flipCard(){
    if (lockBoard)return;
    this.classList.toggle("flip")

    if (!hasFlippedCard){
        //first click  
        hasFlippedCard=true;
        firstCard=this;
    }else {
        //second click
        hasFlippedCard=false;
        secondCard=this;
        if (firstCard.dataset.card == secondCard.dataset.card){
            firstCard.removeEventListener("click",flipCard)
            secondCard.removeEventListener("click",flipCard)
            console.log("executed")
        }
        else {

            let lockBoard = true
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");

                let lockBoard = false
            },500)
        }
    }
}
cards.forEach(card => card.addEventListener("click",flipCard))

 //count moves
 function count(){
    var count= document.getElementById("count")
    count.textContent++
}