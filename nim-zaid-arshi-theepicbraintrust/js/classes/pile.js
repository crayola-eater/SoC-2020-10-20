/**
 * Should return an array of instantiated Coin objects.
 * @param {number} pileSize
 */
const createCoinIterable = (pileSize) => {
  return Array(pileSize)
    .fill(null)
    .map(() => new Coin());
};

class Pile {
  constructor(pileSize) {
    this.coins = createCoinIterable(pileSize);
  }

  /**
   * Should mutate array in place (changing some number of unpicked coins to "picked"),
   * then return a boolean indicating whether any unpicked coins remain.
   *
   * @param {number} numberOfCoinsToPick
   * @throws if not enough unpicked coins available to pick.
   */
  pickCoins(numberOfCoinsToPick) {
    const coinsToPick = this.unpickedCoins.slice(0, numberOfCoinsToPick);
    if (coinsToPick.length < numberOfCoinsToPick) {
      throw new Error(
        `Not enough unpicked coins left. Coins attempted = ${numberOfCoinsToPick}, coins available = ${coinsToPick.length}`
      );
    }
    coinsToPick.forEach((coin) => coin.pick());
    return this.hasUnpickedCoins;
  }

  /**
   * Should return a boolean indicating whether pile contains unpicked coins.
   */
  get containsUnpickedCoins() {
    return this.numberOfUnpickedCoins > 0;
  }

  /**
   * Should return an array of unpicked coins.
   */
  get unpickedCoins() {
    return this.coins.filter((coin) => coin.unpicked);
  }

  /**
   * Should return the number of unpicked coins. Current implementation is suboptimal/inefficient,
   * as passes over the entire array (rather than keeping count/number in state).
   */
  get numberOfUnpickedCoins() {
    return this.unpickedCoins.length;
  }
}
