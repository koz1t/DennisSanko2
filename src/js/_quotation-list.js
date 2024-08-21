const items = document.querySelectorAll('.cards--v2 .cards__item');
let currentIndex = 0;

if (items) {
  const activateNextItem = () => {
    items.forEach(item => item.classList.remove('--glowing'));
    items[currentIndex].classList.add('--glowing');
    currentIndex = (currentIndex + 1) % items.length;
  }
  activateNextItem();
  setInterval(activateNextItem, 2000);
}