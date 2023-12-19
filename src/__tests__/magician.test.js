import Magician from '../magician';

describe('Magician class', () => {
  it('should attack without stoned', () => {
    const magician = new Magician('John');
    magician.attack = 100;
    magician.distance = 2;
    magician.stoned = false;

    expect(magician.attack).toBe(90);
  });

  it('should attack with stoned', () => {
    const magician = new Magician('John');
    magician.attack = 100;
    magician.distance = 4;
    magician.stoned = true;

    expect(magician.attack).toBe(60);
  });
});
