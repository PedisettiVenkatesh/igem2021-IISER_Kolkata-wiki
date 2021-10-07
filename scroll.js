const spaceVal = 200;

const bottlePath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 0, y: 0 }, //1
    { x: 0, y: 1 * spaceVal }, //2
    { x: 0, y: 2 * spaceVal }, //3
    { x: 100, y: 3 * spaceVal }, //4
    { x: 0, y: 4 * spaceVal }, //5
    { x: -100, y: 5 * spaceVal }, //6
    { x: 100, y: 6 * spaceVal }, //7
    { x: -100, y: 7 * spaceVal }, //8
    { x: 100, y: 8 * spaceVal }, //9
    { x: -100, y: 9 * spaceVal }, //10
    { x: 100, y: 10 * spaceVal }, //11
    { x: -100, y: 11 * spaceVal }, //12
    { x: 100, y: 12 * spaceVal }, //13
    { x: -100, y: 13 * spaceVal }, //14
    { x: -100, y: 14 * spaceVal }, //15
    { x: 200, y: 15 * spaceVal }, //16
    { x: 400, y: 16 * spaceVal }, //17
    { x: 300, y: 17 * spaceVal }, //18
    { x: 300, y: 18 * spaceVal }, //19
    { x: 300, y: 19 * spaceVal }, //20
    { x: 300, y: 20 * spaceVal }, //21
    { x: 300, y: 21 * spaceVal }, //22
    { x: 300, y: 22 * spaceVal }, //23
    { x: 300, y: 22 * spaceVal }, //24
    { x: 300, y: 22 * spaceVal }, //25
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".milkBottle", 1, {
    bezier: bottlePath,
    ease: Linear.easeNone,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".iiserKolkata",
  duration: 6000,
  triggerHook: 0,
})
  .setTween(tween)
  .addIndicators()
  // .setPin(".myAnimation")
  .addTo(controller);
