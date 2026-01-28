const toggle = document.querySelector(".theme-toggle");

document.documentElement.setAttribute('data-theme', 'light');

toggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    });