var randomNuber1 = Math.floor(Math.random() * 6 + 1);
var randomNuber2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", ("dice"+randomNuber1+".png"));
document.querySelector(".img2").setAttribute("src", ("dice"+randomNuber2+".png"));

if (randomNuber1===randomNuber2) {
    document.querySelector("h1").innerHTML = "Draw :/";
}
else if (randomNuber1>randomNuber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
