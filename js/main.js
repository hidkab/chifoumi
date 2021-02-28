
alert(" Welcome to the game CHIFOUMI");

var userName = prompt("Enter you name : "); //affichage d'un champs de saisie 
alert("Tank you " + userName );
alert("Are you ready " + userName);

var gammeElements = [ //déclaration d'un tableau
    "pierre",
    "feuille",
    "ciseaux"
];

var player = window.prompt("Choose : " + gammeElements); //choix du player

var computer = Math.random(); // choix de l'ordinateur
if (computer <= 0.34) {
    computer = "pierre";
}
    else if (computer <= 0.67) {
        computer = "peuille";
    }
    else {
        computer = "ciseaux";
}

if (player === computer) {   //comparer les choix
    alert("Equality");
}
    else if (
        (player === gammeElements[0] && computer === gammeElements[2]) ||
        (player === gammeElements[1] && computer === gammeElements[0]) ||
        (player === gammeElements[2] && computer === gammeElements[1]) 
    ) {
        alert(userName + " is winner");
    }
    else {
        alert("Computer is winner");
}