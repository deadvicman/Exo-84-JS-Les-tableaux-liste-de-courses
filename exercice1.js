// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let listeCourse = document.getElementById("listeCourse")



function userElement() { buttonTextToAdd.addEventListener("click", function (event) {
    event.preventDefault();
    let newListElement = document.createElement("li")
    newListElement.innerText = textToAdd.value.toString();
    listeCourse.append(newListElement);
    addDeleteButton();
} )
}



function addDeleteButton(elementToDelete) {
    let deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Effacer";
    listeCourse.append(deleteButton);

    deleteButton.addEventListener("click", function (event) {
        event.preventDefault();
        articles.splice(elementToDelete,1);
        console.log(articles);
        addElementsToList();
    } )
}



function addElementsToList (){
    document.getElementById("listeCourse").innerHTML = "";
    for (let i = 0; i < articles.length; i++) {
        let itemList = document.createElement("li");
        itemList.innerText = articles[i].toString();
        listeCourse.append(itemList);
        addDeleteButton(i);

    }
    userElement();
}



let textToAdd = document.createElement("input");
document.body.prepend(textToAdd);

let buttonTextToAdd = document.createElement("input");
buttonTextToAdd.type = "button";
buttonTextToAdd.value = "Ajouter";
document.body.prepend(buttonTextToAdd);

addElementsToList();






