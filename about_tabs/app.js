const aboutContainer = document.querySelector(".about");
const tabButtons = aboutContainer.querySelectorAll(".tab-btn");

tabButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const activeButton = aboutContainer.querySelector(".tab-btn.active");
		const activeContent = aboutContainer.querySelector(".content.active");

		if (button !== activeButton) {
			activeButton.classList.remove("active");
			activeContent.classList.remove("active");

			const contentId = button.dataset.id;
			const tabContent = document.getElementById(contentId);

			button.classList.add("active");
			tabContent.classList.add("active");
		}
	});
});
