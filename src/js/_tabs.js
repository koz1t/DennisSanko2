const tabs = document.querySelectorAll('.tabs');

tabs.forEach(tab => {
  const
    btns = tab.querySelectorAll('.tabs__btn'),
    content = tab.querySelectorAll('.tabs__content'),
    carousel = tab.querySelector('.tabs__content-carousel'),
    btnContainer = tab.querySelector('.tabs__btns'),
    paginationItems = tab.querySelectorAll('.tabs__pagination-item');
  let
    currentItem = 0;

  if (btns.length > 0 && carousel && (btns.length == content.length)) {
    const updateActiveTab = (index) => {
      btns[currentItem].classList.remove('--active');
      content[currentItem].classList.remove('--active');
      paginationItems[currentItem].classList.remove('--active');
      currentItem = index;
      carousel.style.transform = `translateX(-${currentItem * 100}%)`;
      carousel.style.height = `${content[currentItem].offsetHeight}px`;
      btns[currentItem].classList.add('--active');
      content[currentItem].classList.add('--active');
      paginationItems[currentItem].classList.add('--active');
      centerActiveButton();
    };

    const centerActiveButton = () => {
      const activeBtn = btns[currentItem];
      const btnContainerWidth = btnContainer.offsetWidth;
      const btnOffsetLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      const scrollPosition = btnOffsetLeft - (btnContainerWidth / 2) + (btnWidth / 2);
      btnContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    };

    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove('--active');
      content[i].classList.remove('--active');
      paginationItems[i].classList.remove('--active');
    }

    updateActiveTab(currentItem);

    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        updateActiveTab(index);
      });
    });

    paginationItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        updateActiveTab(index);
      });
    });

    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', () => {
      const swipeDistance = startX - endX;
      if (swipeDistance > 50 && currentItem < btns.length - 1) {
        updateActiveTab(currentItem + 1);
      } else if (swipeDistance < -50 && currentItem > 0) {
        updateActiveTab(currentItem - 1);
      }
    });
  }
});