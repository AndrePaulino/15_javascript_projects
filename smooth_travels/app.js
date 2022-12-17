//offsetTop - A Number, representing the top position of the element, in pixels

// Set copyright date
const copyrightDate = document.getElementById("copyright-date");
copyrightDate.innerHTML = new Date().getFullYear();

// Navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");
navToggle.addEventListener("click", () => {
	const containerHeight = navLinksContainer.getBoundingClientRect().height;
	const linksHeight = navLinks.getBoundingClientRect().height;
	if (containerHeight === 0)
		navLinksContainer.style.height = `${linksHeight}px`;
	else navLinksContainer.style.height = 0;
});

// Fixed Navbar
const navbar = document.getElementById("nav");
const toTopLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
	const navbarHeight = navbar.getBoundingClientRect().height;
	if (scrollY > navbarHeight) navbar.classList.add("fixed-nav");
	else navbar.classList.remove("fixed-nav");

	if (scrollY > innerHeight / 3) toTopLink.classList.add("show-link");
	else toTopLink.classList.remove("show-link");
});

// Smooth Scroll
const scrollableLinks = document.querySelectorAll(".scroll-link");
scrollableLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		const id = event.currentTarget.getAttribute("href").slice(1);
		const sectionLinked = document.getElementById(id);

		const fixedNavbar = navbar.classList.contains("fixed-nav");
		const navbarHeight = navbar.getBoundingClientRect().height;
		const linksContainerHeight =
			navLinksContainer.getBoundingClientRect().height;

		let sectionTopOffset = sectionLinked.offsetTop - navbarHeight;
		if (!fixedNavbar) sectionTopOffset -= navbarHeight;
		if (linksContainerHeight > 82) sectionTopOffset += linksContainerHeight;

		scrollTo({
			left: 0,
			top: sectionTopOffset,
		});

		navLinksContainer.style.height = 0;
	});
});
