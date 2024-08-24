var animation = anime({
  targets: '.div',
  // translateX: 250,
  duration: 1600,
  // easing: 'spring(1, 80, 10, 0)',
  // loop: true,
  // autoplay: false
  translateX: 500,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

document.querySelector('.play').onclick = animation.play;
// document.querySelector('.return').onclick = animation.reverse;