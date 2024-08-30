var controller = new ScrollMagic.Controller();

// Scene1

var scene = new ScrollMagic.Scene({
triggerElement: "scene1",
duration: "50%"
})

.addIndicators()

// .setTween(anime({
//   targets
// }))

.addTo(controller)

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

//  Scene1
//  Scene2



//  Scene2