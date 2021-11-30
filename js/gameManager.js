let gameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType)
    this.setPreFight()
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case 'Warrior':
        player = new Player('Warrior', 100, 100, 10, 10, 10)
        break
      case 'Mage':
        player = new Player('Mage', 100, 100, 10, 10, 10)
        break
      case 'Rogue':
        player = new Player('Rogue', 100, 100, 10, 10, 10)
        break
      default:
        console.log('Error: No class selected')
    }
  },
  setPreFight: function () {},
}
