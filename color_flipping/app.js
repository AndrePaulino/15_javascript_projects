const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
	const getRandomColor = () => Math.floor(Math.random() * colors.length);
	const randomColor = getRandomColor();

	document.body.style.backgroundColor = colors[randomColor];
	color.textContent = colors[randomColor];
});
