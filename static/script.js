const toggleModeButton = document.getElementById('toggle-button');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
})