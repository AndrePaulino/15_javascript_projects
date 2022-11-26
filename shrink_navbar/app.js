const headerLinks = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
	headerLinks.classList.toggle("show-links");

	navToggle.firstElementChild.classList.toggle("fa-bars");
	navToggle.firstElementChild.classList.toggle("fa-xmark");
	navToggle.firstElementChild.classList.add("bounce-in");
});

navToggle.firstElementChild.addEventListener("animationend", () =>
	navToggle.firstElementChild.classList.remove("bounce-in")
);
