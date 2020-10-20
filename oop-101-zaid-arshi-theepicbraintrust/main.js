//Task 1
class Cupboard {
  constructor(height, width, numberOfShelves) {
    this.height = height;
    this.width = width;
    this.numberOfShelves = numberOfShelves;
    this.doorIsOpen = false;
  }

  openDoor() {
    this.doorIsOpen = true;
  }

  closeDoor() {
    this.doorIsOpen = false;
  }
}

//Task 2
const cupboard = new Cupboard(10, 10, 2);

console.log("Before opening", cupboard);
cupboard.openDoor();
console.log("After opening", cupboard);

//Task 3
class TemperatureCupboard extends Cupboard {
  constructor(height, width, numberOfShelves, temperature, insulation) {
    super(height, width, numberOfShelves);
    this.temperature = temperature;
    this.insulation = insulation;
    this.lightIsOn = false;
  }

  openDoor() {
    super.openDoor();
    this.lightIsOn = true;
    console.log("Fridge door is open");
  }

  closeDoor() {
    super.closeDoor();
    this.lightIsOn = false;
    console.log("Fridge door is closed");
  }
}

const fridge = new TemperatureCupboard(170, 50, 5, "5 degrees C", true);
console.log(fridge);
fridge.openDoor();
console.log(fridge);
fridge.closeDoor();
