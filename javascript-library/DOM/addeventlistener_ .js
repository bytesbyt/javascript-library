
function boxClicked(){
    if(this.style.backgroundColor === "orange"){
        this.style.backgroundColor = "green";
    } else {
        this.style.backgroundColor = "orange";
    }
}

let boxes = document.getElementsByClassName('box');

for(let i=0; i < boxes.length; i++){
    boxes[i].addEventListener('click', boxClicked);
}
