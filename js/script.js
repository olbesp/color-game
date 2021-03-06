var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				//change all squares backgroung 
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?";
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again"
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match pickedColor;
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		// check if color is not null
		if(colors[i]) {
			// show color
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			// hide color
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor = "#4094c9";
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push it into array
		arr.push(randomColor());
	}
	//return array
	return arr;
};

function randomColor() {
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256);
	//Make "rgb(r, g, b)"
	return "rgb(" + red + ", " + green + ", " + blue + ")";
};