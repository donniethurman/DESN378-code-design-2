document.addEventListener('DOMContentLoaded', function() {
  // Load saved theme (if any)
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  } else {
    document.documentElement.dataset.theme = 'light';
  }

  const toggle = document.querySelector(".theme-toggle");

  console.log('Toggle button found:', toggle);
  console.log('Current theme:', document.documentElement.dataset.theme);

  if (!toggle) {
    console.error('Theme toggle button not found!');
    return;
  }

  toggle.addEventListener('click', function() {
    console.log('Button clicked!');
    const currentTheme = document.documentElement.dataset.theme;
    console.log('Current theme before toggle:', currentTheme);

    let newTheme;
    if (currentTheme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }

    console.log('New theme:', newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  });
});