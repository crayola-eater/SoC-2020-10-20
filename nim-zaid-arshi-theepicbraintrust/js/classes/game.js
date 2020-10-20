/**
 * Should return an array of instantiated Player objects.
 * @param {{name: string, type: string}[]} players
 */
const createPlayers = (players) => {
  return players.map(createPlayerFromType);
};

class Game {
  constructor({ players, pileSize }) {
    this.players = createPlayers(players);
    this.pile = new Pile(pileSize);
  }

  /**
   * Should play the game until all coins have been picked.
   */
  async play() {
    renderCoinsView(createCoinsView(this.pile.numberOfUnpickedCoins));
    while (true) {
      for (const player of this.players) {
        els.whoseTurn.textContent = `Current turn: ${player.name}`;

        if (player.isComputer) {
          // Introduce artificial delay so that computer "thinks" instead of
          // moving immediately after player.
          await new Promise((resolve) => setTimeout(resolve, 1e3));
        }

        const numberOfCoinsPicked = await player.getNumberOfCoinsPicked(
          els.controlsSection
        );

        this.pile.pickCoins(
          Math.min(numberOfCoinsPicked, this.pile.numberOfUnpickedCoins)
        );

        renderMoveView(
          createMoveView({
            name: player.name,
            choice: numberOfCoinsPicked,
            remaining: this.pile.numberOfUnpickedCoins,
          })
        );

        renderCoinsView(createCoinsView(this.pile.numberOfUnpickedCoins));

        const gameIsOver = !this.pile.containsUnpickedCoins;
        const shouldDisableButtons = gameIsOver || !player.isComputer;

        els.controls.forEach((b) => (b.disabled = shouldDisableButtons));

        if (gameIsOver) {
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          return alert(`${player.name} has won!`);
        }
      }
    }
  }
}
