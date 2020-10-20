/**
 * For now this class is basically dressed just an overdressed
 * boolean value, but there's room to add more state and/or behaviour.
 */
class Coin {
  constructor() {
    this.unpicked = true;
  }

  pick() {
    this.unpicked = false;
  }
}
