const cards = document.querySelectorAll('.cards');
cards.forEach(card => {
  const items = card.querySelectorAll('.cards__item');
  const paginationItems = card.querySelectorAll('.cards__pagination-item');
  let currentIndex = 0;

  function updateActiveClasses() {
    items.forEach(item => item.classList.remove('--active'));
    paginationItems.forEach(item => item.classList.remove('--active'));
    items[currentIndex].classList.add('--active');
    paginationItems[currentIndex].classList.add('--active');
    centerActiveItem();
  }

  function centerActiveItem() {
    if (currentIndex === 0) {
      card.querySelector('.cards__list').style.transform = 'translateX(0)';
    } else {
      const itemWidth = items[currentIndex].offsetWidth;
      const containerWidth = card.offsetWidth;
      const offset = items[currentIndex].offsetLeft - (containerWidth / 2) + (itemWidth / 2);
      card.querySelector('.cards__list').style.transform = `translateX(-${offset}px)`;
    }
  }

  function initializeSlider() {
    updateActiveClasses();
    centerActiveItem();
  }

  initializeSlider();

  paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      updateActiveClasses();
    });
  });

  let startX = 0;
  let endX = 0;

  card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  card.addEventListener('touchend', () => {
    if (startX > endX + 50) {
      currentIndex = (currentIndex + 1) % items.length;
    } else if (startX < endX - 50) {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
    }
    updateActiveClasses();
  });

  window.addEventListener('resize', centerActiveItem);
});