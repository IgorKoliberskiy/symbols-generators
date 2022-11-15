export default class Team {
  constructor() {
    this.team = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      }, {
        name: 'Демон',
        type: 'Daemon',
        health: 60,
        level: 2,
        attack: 50,
        defence: 20,
      }, {
        name: 'Маг',
        type: 'Magician',
        health: 70,
        level: 3,
        attack: 30,
        defence: 20,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.team.length; i += 1) {
      yield this.team[i];
    }
  }
}
