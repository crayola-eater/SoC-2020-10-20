const players = [
  { name: "Ben", type: "human" },
  { name: "RoboNim", type: "computer" },
];

const game = new Game({
  players,
  pileSize: 10,
});

game.play();
