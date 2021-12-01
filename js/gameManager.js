let gameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType)
    this.setPreFight()
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case 'Warrior':
        player = new Player(classType, 100, 100, 10, 10, 10)
        break
      case 'Mage':
        player = new Player(classType, 100, 100, 10, 10, 10)
        break
      case 'Rogue':
        player = new Player(classType, 100, 100, 10, 10, 10)
        break
      case 'Hunter':
        player = new Player(classType, 100, 100, 10, 10, 10)
        break
      case 'Priest':
        player = new Player(classType, 100, 100, 10, 10, 10)
        break
      default:
        console.log('Error: No class selected')
    }
    let interface = document.querySelector('.interface')
    interface.innerHTML = `
        <div class="player-img">
          <img src="image/avatar-players/download(5).png" class="img-avatar">
        </div>  
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

    console.log(interface)
  },
  setPreFight: function () {
    let getHeader = document.querySelector('.header')
    let getActions = document.querySelector('.actions')
    let getArena = document.querySelector('.arena')

    getHeader.innerHTML = `
        <h1>${player.classType}</h1>
        <p> Find an enemy to fight!</p>
    `
    getActions.innerHTML = `
        <div class="action-buttons">
            <a href="#" class= "btn-prefight" onclick="gameManager.setFight()">Search Enemy</a>
        </div>
    `

    getArena.tyle.visibility = 'visible'
  },

  setFight: function () {
    let getHeader = document.querySelector('.header')
    let getActions = document.querySelector('.actions')
    let getEnemy = document.querySelector('.enemy')

    //create enemy

    let enemy00 = new Enemy('Goblin', 100, 100, 10, 10, 10)
    let enemy01 = new Enemy('Troll', 100, 100, 10, 10, 10)
    let enemy02 = new Enemy('Orc', 100, 100, 10, 10, 10)

    let ChooseRandomEnemy = Math.floor(Math.random() * Math.floor(2))
    // console.log(ChooseRandomEnemy)

    switch (ChooseRandomEnemy) {
      case 0:
        enemy = enemy00
        break
      case 1:
        enemy = enemy01
        break
      case 2:
        enemy = enemy02
        break
      default:
        console.log('Error: No enemy selected')
    }

    getHeader.innerHTML = `
        <h1>${player.classType}</h1>
        <p> You have encountered a ${enemy.classType}</p>
    `
    getActions.innerHTML = `
        <div class="action-buttons">
            <a href="#" class= "btn-prefight" onclick="gameManager.setFight()">Search Enemy</a>
        </div>
    `
  },
}
