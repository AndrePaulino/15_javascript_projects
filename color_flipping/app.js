const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
	const randomColor = () => Math.floor(Math.random() * colors.length);

	document.body.style.backgroundColor = colors[randomColor()];
	color.textContent = colors[randomColor()];
});
