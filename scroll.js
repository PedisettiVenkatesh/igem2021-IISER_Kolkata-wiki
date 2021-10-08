const bottlePath = {
  curviness: 1,
  autoRotate: true,
  values: [
    { x: 0, y: 0 },
    { x: 0, y: 5700 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".milkBottle", 6, {
    bezier: bottlePath,
    ease: Linear.easeNone,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".triggerBottle",
  duration: 5500,
  triggerHook: 0.1,
})
  .setTween(tween)
  .addIndicators()
  .addTo(controller);
