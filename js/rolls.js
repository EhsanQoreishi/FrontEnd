console.log(10);
let PlayerMoves = {
  calcAttack: function() {
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
      let offserDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offserDamage;
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }

    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offserDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offserDamage;
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    let getPlayerHealth = document.querySelector(".hero .health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamege = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamege;
      alert("You hit " + playerAttackValues[0] + "damage" + playerAttackValues[1] + "times.");
      if (enemy.health <= 0) {
        alert("You win! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      }
      let enemyAttackValues = enemyAttack();
      let totalDamegeEnemy = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamegeEnemy;
      alert("Enemy hit " + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
      if (player.health <= 0) {
        alert("You loose! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: 0';
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
      }
    }
    if (getPlayerSpeed < getEnemySpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamegeEnemy = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamegeEnemy;
      alert("Enemy hit " + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
      if (player.health <= 0) {
        alert("You loose! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: 0';
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
      }
      let playerAttackValues = playerAttack();
      let totalDamege = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamege;
      alert("You hit " + playerAttackValues[0] + "damage" + playerAttackValues[1] + "times.");
      if (enemy.health <= 0) {
        alert("You win! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      }

    }
  }
}
