// Check if dark mode is enabled at first load
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const themeToggleButton = document.getElementById('themeToggle');

// Check initial state and set dark mode if needed
if (darkModeQuery.matches) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});