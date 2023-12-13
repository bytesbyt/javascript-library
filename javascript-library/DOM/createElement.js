let cocktails = ["Daiquari", "Dry Martini", "Margatrita", "Manhattan", "Mojito", "Mai Tai"];

let list = document.createElement('ul');
let listItems = '';

for (let drink in cocktails) {
    listItems += `<li>${cocktails[drink]}</li>`;
}

list.innerHTML = listItems;
document.body.appendChild(list);

