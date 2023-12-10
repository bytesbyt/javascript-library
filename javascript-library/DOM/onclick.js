function changeCards() {
    let cards = document.getElementsByClassName('card');
    
    for (let i=0; i < cards.length; i++){
        cards[i].style.backgroundColor= "red";
    }
}
