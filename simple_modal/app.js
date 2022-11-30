const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
	modalBtn.classList.add("bounce-in");
	modalOverlay.classList.add("open-modal");
});

modalBtn.addEventListener("animationend", () => {
	modalBtn.classList.remove("bounce-in");
});

closeBtn.addEventListener("click", () => {
	modalOverlay.classList.add("fade-out");
});

modalOverlay.addEventListener("animationend", (event) => {
	if (event.animationName === "fade-out")
		modalOverlay.classList.remove("open-modal");

	modalOverlay.classList.remove("fade-out");
});
