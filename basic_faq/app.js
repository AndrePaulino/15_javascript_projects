const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	const toogleButton = question.querySelector(".question-btn");

	toogleButton.addEventListener("click", (event) => {
		questions.forEach((item) => {
			if (item !== question) {
				item.classList.remove("show-text");
			}
		});

		question.classList.toggle("show-text");
	});
});
