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
    let interface = document.getElementById('interface')
    interface.innerHTML = `
        <div class="player-stats">
            <div class="player-name">
                <h2>${player.classType}</h2>
            </div>
            <div class="player-health">
                <h2>${player.health}</h2>
            </div>
            <div class="player-mana">
                <h2>${player.mana}</h2>
            </div>
            <div class="player-strength">
                <h2>${player.strength}</h2>
            </div>
            <div class="player-agility">
                <h2>${player.agility}</h2>
            </div>
            <div class="player-speed">
                <h2>${player.speed}</h2>
            </div>
        </div>
    `
  },
  setPreFight: function () {},
}
