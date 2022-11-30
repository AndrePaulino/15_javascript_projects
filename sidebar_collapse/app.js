const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeSidebarBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
	sidebar.classList.toggle("show-sidebar");
	sidebarToggle.firstElementChild.classList.add("bounce-in");
});

sidebarToggle.firstElementChild.addEventListener("animationend", () =>
	sidebarToggle.firstElementChild.classList.remove("bounce-in")
);

closeSidebarBtn.addEventListener("click", () => {
	sidebar.classList.remove("show-sidebar");
});
