import Character from './character';

export default class Mods extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.stoned = false;
  }

  get stoned() {
    return this.stonedValue;
  }

  set stoned(value) {
    this.stonedValue = value;
  }

  get attack() {
    const damagePower = {
      1: 100,
      2: 90,
      3: 80,
      4: 70,
      5: 60,
    };

    if (this.stoned) {
      return (
        Math.round(this.attackValue * (damagePower[this.distance] / 100)
        - Math.log2(this.distance) * 5)
      );
    }

    return this.attackValue * (damagePower[this.distance] / 100);
  }

  set attack(value) {
    this.attackValue = value;
  }
}
