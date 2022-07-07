var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var left = "images/dice6.png";
var right = "images/dice6.png";

function randomImageLeft() {
    if (randomNumber1 == 1) {
        left = "images/dice1.png"
        return;
    } else if (randomNumber1 == 2) {
        left = "images/dice2.png"
        return;
    } else if (randomNumber1 == 3) {
        left = "images/dice3.png"
        return;
    } else if (randomNumber1 == 4) {
        left = "images/dice4.png"
        return;
    } else if (randomNumber1 == 5) {
        left = "images/dice5.png"
        return;
    } else {
        left = "images/dice6.png"
        return;
    }
}

function randomImageRight() {
    if (randomNumber2 == 1) {
        right = "images/dice1.png"
        return;
    } else if (randomNumber2 == 2) {
        right = "images/dice2.png"
        return;
    } else if (randomNumber2 == 3) {
        right = "images/dice3.png"
        return;
    } else if (randomNumber2 == 4) {
        right = "images/dice4.png"
        return;
    } else if (randomNumber2 == 5) {
        right = "images/dice5.png"
        return;
    } else {
        right = "images/dice6.png"
        return;
    }
}

function winner() {
    if (randomNumber1 > randomNumber2) {
        // Player 1 Wins
        document.querySelector("h1").textContent = "Player 1 Wins!";
        return;
    } else if (randomNumber1 < randomNumber2) {
        // Player 2 Wins
        document.querySelector("h1").textContent = "Player 2 Wins!";
        return;
    } else {
        // Draw
        document.querySelector("h1").textContent = "Draw!";
        return;
    }
}

randomImageLeft();
randomImageRight();
winner();

document.getElementsByClassName("img1")[0].setAttribute("src", left);
document.getElementsByClassName("img2")[0].setAttribute("src", right);