const switchButton = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

switchButton.addEventListener("click", () => {
	if (!switchButton.classList.contains("slide")) video.pause();
	else video.play();

	switchButton.classList.toggle("slide");
});

window.addEventListener("load", () => {
	preloader.classList.add("hide-preloader");
});
