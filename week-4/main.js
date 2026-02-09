const THEME_STORAGE_KEY = "theme";
const THEME_VALUES = new Set(["light", "dark", "system"]);
const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const getStoredTheme = () => {
	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	return THEME_VALUES.has(stored) ? stored : "system";
};

const getSystemTheme = () => (colorSchemeQuery.matches ? "dark" : "light");

const applyTheme = (preference) => {
	const resolved = preference === "system" ? getSystemTheme() : preference;
	document.documentElement.dataset.theme = resolved;
};

applyTheme(getStoredTheme());

colorSchemeQuery.addEventListener("change", () => {
	if (getStoredTheme() === "system") {
		applyTheme("system");
	}
});

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

document.addEventListener("DOMContentLoaded", () => {
	const themeButtons = document.querySelectorAll("[data-theme]");

	if (!themeButtons.length) {
		return;
	}

	themeButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const selected = button.getAttribute("data-theme");
			if (!THEME_VALUES.has(selected)) {
				return;
			}

			localStorage.setItem(THEME_STORAGE_KEY, selected);
			applyTheme(selected);
			if (dropdown) {
				dropdown.classList.remove("is-open");
			}
		});
	});
});
