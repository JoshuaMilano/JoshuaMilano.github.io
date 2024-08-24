// init controller
var controller = new ScrollMagic.Controller();

// create a scene
let scene = new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#my-sticky-element') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

//Add first scrollmagic scene
let scene1 = new ScrollMagic.Scene({
  triggerElement: "#one",
  triggerHook: 0.5,
  reverse: false
})

// Add debug indicators
.addIndicators({
  colorTrigger: "black",
  colorStart: "blue",
  colorEnd: "red",
  indent: 10
})

.addTo(controller);



// STOP - MY CODE
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