var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random-generator");
var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

function randomize() {
	color1.value = randomColor;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background');


function showColor() {
	css.textContent = bgColor;
}

showColor()

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomize)