import Mods from './mods';

export default class Magician extends Mods {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
