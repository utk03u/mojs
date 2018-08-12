const Burst = new mojs.Burst({
  radius: {0:200},
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: {6:0},
    angle: {360: 0},
    duration: 3000,
    radius: {30:5},
  }
});

const Burst2 = new mojs.Burst({
  radius: {0:100},
  count: 15,
  children: {
    shape: 'zigzag',
    stroke: {'magenta': 'red'},
    points : 11,
    strokeWidth: {6:0},
    fill: 'none',
    angle: {'-270': 0},
    opacity:{1:0},
    duration: 3000,
    radius: {30:5},
  }
});

const Burst3 = new mojs.Burst({
  radius: { 0:250 },
  count: 5,
  children: {
    fill: 'blue',
    points: 7,
    radius:{15:10},
    angle: {'-270': 0},
    opacity:{1:0},
    duration: 3000,
  }
});

const circ_default ={
  radius: {0:300},
  stroke: 'yellow',
  fill: 'none',
  opacity: {1:0},
  duration: 3000,
};

const circ = new mojs.Shape({
  ...circ_default
});

const circ2 = new mojs.Shape({
  ...circ_default,
  delay: 500
});

const timeline = new mojs.Timeline({
  repeat: 999
})
.add(Burst, Burst2, Burst3, circ, circ2)
.play();
