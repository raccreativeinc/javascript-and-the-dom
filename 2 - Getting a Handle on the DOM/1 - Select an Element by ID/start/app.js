const headline = document.getElementById('headline')
const buttonMain = document.getElementById('btn-main')
const items = document.getElementsByTagName('li');
const highlights = document.getElementsByClassName('highlight');

for ( const highlight of highlights ) {
  highlight.style.backgroundColor = 'cornsilk';

  console.log(highlight);
}

  for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'orchid';
}

buttonMain.addEventListener('click', () => {
  headline.style.border = 'solid 2px red';
});