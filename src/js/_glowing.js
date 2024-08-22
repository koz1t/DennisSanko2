document.querySelectorAll('[data-glowing]').forEach(container => {
  const interval = parseInt(container.getAttribute('data-glowing'), 10);
  const items = Array.from(container.querySelectorAll('*')).filter(element =>
    Array.from(element.classList).some(className => className.endsWith('__item'))
  );
  let currentIndex = 0;

  if (items.length > 0) {
    const activateNextItem = () => {
      items.forEach(item => item.classList.remove('--glowing'));
      items[currentIndex].classList.add('--glowing');
      currentIndex = (currentIndex + 1) % items.length;
    };
    activateNextItem();
    setInterval(activateNextItem, interval);
  }
});