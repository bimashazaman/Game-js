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
    let calcOutputDamage = calcBaseDamage + ofSetDamage

    let numberOfHits =
      Math.floor((Math.random() * math.floor(player.agility / 10)) / 2) + 1

    let attactValues = [calcOutputDamage, numberOfHits]
    return attactValues
  },

  enemyAttack: function () {
    // enemy attacks
    let calcBaseDamage
    if (enemy.mana > 0) {
      if (enemy.mana > 0) {
        calcBaseDamage = (enemy.strength * enemy.mana) / 1000
        calcBaseDamage = (enemy.strength * enemy.mana) / 1000
        calcBaseDamage = (enemy.strength * enemy.mana) / 1000
      } else {
        calcBaseDamage = (enemy.strength * enemy.agility) / 1000
        calcBaseDamage = (enemy.strength * enemy.agility) / 1000
        calcBaseDamage = (enemy.strength * enemy.agility) / 1000
      }

      let ofSetDamage = Math.floor(Math.random() * math.floor(10))
      let calcOutputDamage = calcBaseDamage + ofSetDamage

      let numberOfHits =
        Math.floor((Math.random() * math.floor(enemy.agility / 10)) / 2) + 1
      Math.floor((Math.random() * math.floor(enemy.agility / 10)) / 2) + 1

      let attactValues = [calcOutputDamage, numberOfHits]
      return attactValues
    }
    // get player/enemy health
    let getPlayerGrowth = document.querySelector('.health-player')
    let getEnemyGrowth = document.querySelector('.health-enemy')

    // initiate attacks

    if (getPlayerSpeed >= getEnemySpeed) {
      // player attacks
      let playerAttactValues = playerMoves.playerAttack()
      let totalDamage = playerAttactValues[0] * playerAttactValues[1]
      enemy.health = enemy.health - totalDamage
      alert('you hit the enemy for ' + totalDamage + ' damage' + '!')

      if (enemy.health <= 0) {
        alert('you win!')
        getPlayerHealth.innerHTML = 'Health: ' + player.health
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health
      } else {
        // enemy attacks
        let enemyAttactValues = playerMoves.enemyAttack()
        let totalDamage = enemyAttactValues[0] * enemyAttactValues[1]
        player.health = player.health - totalDamage
        alert('the enemy hit you for ' + totalDamage + ' damage' + '!')

        if (player.health <= 0) {
          alert('you lose!')
          getPlayerHealth.innerHTML = 'Health: ' + player.health
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health
        }
      } // end of if else
    } // end of enemy attack

    //   getEnemyGrowth.innerHTML = enemy.health
    // } else {
    //   // enemy attacks
    //   let enemyAttactValues = playerMoves.enemyAttack()
    //   let totalDamage = enemyAttactValues[0] * enemyAttactValues[1]
    //   player.health = player.health - totalDamage
    //   getPlayerGrowth.innerHTML = player.health

    // }
  },
}
