const btnUpdate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');

btnUpdate.addEventListener('click', () => {
  const headline = document.getElementById('headline');													 
  const input = document.querySelector('.input-main');

  headline.className = 'grow';
  headline.textContent = input.value;
  input.value = '';
});

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  listContainer.style.display = 'none';
})