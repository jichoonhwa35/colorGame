var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetB = document.querySelector("#reset");
var modeB=document.querySelectorAll(".mode");

init();

function init(){
	setUpModeB();
	setUpSquares();
	reset();
}

function setUpModeB(){
	for (var i = 0; i < modeB.length; i++) {
		modeB[i].addEventListener("click", function(){
			// button effect
			modeB[0].classList.remove("selected");
			modeB[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of cliked squre
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedcolor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetB.textContent = "Play Again?"
				changeColors(clickedColor);	
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";	
				messageDisplay.textContent = "Try again!";		
			}
		});
	}
}

function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetB.textContent = "new colors";
	messageDisplay.textContent = "";
	// change colors of square
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetB.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	// loop through all squares
	// change each color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	};
	// return that array
	return arr;
}

function randomColor(){
	// pick a "RED" form 0-255
	var r = Math.floor(Math.random() * 255);
	// pick a "GREEN" form 0-255
	var g = Math.floor(Math.random() * 255);
	// pick a "BLUR" form 0-255
	var b = Math.floor(Math.random() * 255);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

