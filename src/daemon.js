import Mods from './mods';

export default class Daemon extends Mods {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
