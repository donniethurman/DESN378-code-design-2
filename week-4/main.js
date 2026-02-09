const dropdown = document.querySelector(".dropdown");
const toggleButton = document.querySelector(".dropbtn");

if (dropdown && toggleButton) {
	toggleButton.addEventListener("click", (event) => {
		event.stopPropagation();
		dropdown.classList.toggle("is-open");
	});

	document.addEventListener("click", () => {
		dropdown.classList.remove("is-open");
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			dropdown.classList.remove("is-open");
		}
	});
}
