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

const timeline = new mojs.Timeline({
  repeat: 999
})
.add(Burst)
.play();
