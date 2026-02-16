// Sorry but... Was copied by ChatGPT. I CAN STILL CODE

const scoreDisplay = document.getElementById("scoreDisplay");
const clickCanvas = document.getElementById("clickCanvas");
let score = 0;

const dot = document.createElement("div");
dot.style.position = "absolute";
dot.style.width = "50px";
dot.style.height = "50px";
dot.style.borderRadius = "50%";
dot.style.backgroundColor = "red";
dot.style.cursor = "pointer";
clickCanvas.appendChild(dot);

function moveDot() {
	const maxX = clickCanvas.clientWidth - dot.offsetWidth;
	const maxY = clickCanvas.clientHeight - dot.offsetHeight;
	const x = Math.random() * maxX;
	const y = Math.random() * maxY;
	dot.style.left = x + "px";
	dot.style.top = y + "px";
}

dot.addEventListener("click", () => {
	score++;
	scoreDisplay.textContent = "Score: " + score;
	moveDot();
});

moveDot();