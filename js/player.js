let player

class Player {
  constructor(classType, health, mana, strength, agility, speed) {
    this.classType = classType
    this.health = health
    this.mana = mana
    this.strength = strength
    this.agility = agility
    this.speed = speed
  }
}

let playerMoves = {
  calcAttack: function () {
    //who attacks first?
    let playerSpeed = player.speed
    let enemySpeed = enemy.speed
  },

  playerAttack: function () {
    //player attacks
    let calcBaseDamage
    if (player.mana > 0) {
      calcBaseDamage = (player.strength * player.mana) / 1000
    } else {
      calcBaseDamage = (player.strength * player.agility) / 1000
    }

    let ofSetDamage = Math.floor(Math.random() * math.floor(10))
  },
} // end of playerMoves
