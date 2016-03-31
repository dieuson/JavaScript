function test(){
	var exercice = document.getElementsByClassName("exercice");//Je cree une variable qui vas selectionner la div qui a pour classe "exercice";
	var footer = exercice[0].children[2].children[0].innerHTML = "Hello World"; //Je cree une variable qui prend le chemin de l'enfant de notre div class et change le text de celui ci;
}

document.addEventListener("DOMContentLoaded", test());