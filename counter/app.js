// CSS colors.
const redLight = getComputedStyle(document.documentElement).getPropertyValue(
	"--clr-red-light"
);
const greenLight = getComputedStyle(document.documentElement).getPropertyValue(
	"--clr-green-light"
);
const grey10 = getComputedStyle(document.documentElement).getPropertyValue(
	"--clr-grey-10"
);

// Initial count
let count = 0;

// Get value and all buttons.
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// Add event listeners, cheack btn class and apply according logic.
buttons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		const styles = event.currentTarget.classList;

		count = styles.contains("increase")
			? count + 1
			: styles.contains("decrease")
			? count - 1
			: 0;

		value.style.color =
			count > 0 ? greenLight : count < 0 ? redLight : grey10;

		value.textContent = count;
	});
});
