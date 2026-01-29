// Detect and apply theme on page load (runs immediately)
(function() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  // ... your existing code ...
});
/*// Step 1: Check for saved preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User has made a choice — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
} */

document.addEventListener('DOMContentLoaded', function() {
  // ... your existing code ...
});
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