/**
 * Should return an instantiated Player/ComputerPlayer object.
 * @param {{name: string, type: string}} options
 * @throws if unsupported "type" argument.
 */
const createPlayerFromType = ({ name, type }) => {
  switch (type) {
    case "human":
      return new Player(name);
    case "computer":
      return new ComputerPlayer(name);
    default:
      throw new Error(`Unexpected player type = ${type}`);
  }
};

class Player {
  constructor(name) {
    this.name = name;
    this.isComputer = false;
  }

  /**
   * Should return a promise that (eventually) resolves to 1 or 2 (depending
   * on which button the user clicked).
   */
  getNumberOfCoinsPicked(el) {
    return new Promise((resolve) => {
      el.addEventListener("click", function choiceHandler(e) {
        if (e.target.classList.contains("coin-choice")) {
          el.removeEventListener("click", choiceHandler);
          resolve(+e.target.dataset.choice);
        }
      });
    });
  }
}

class ComputerPlayer extends Player {
  constructor(name) {
    super(name);
    this.isComputer = true;
  }

  /**
   * Should return either 1 or 2 (representing coins picked).
   * Uses pseudo-randomness to make the choice.
   */
  async getNumberOfCoinsPicked() {
    return Math.random() < 0.5 ? 1 : 2;
  }
}
