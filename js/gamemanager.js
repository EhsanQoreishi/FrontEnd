let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Warrior":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Rogue":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Mage":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "Hunter":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<section class="hero"><img src="imgs/player/' + classType.toLowerCase() + '.jpg"><div><h3>' + classType + ' </h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>strength: ' + player.strength + '</p><p>agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div></section>';
  },
  setPreFight: function() {
    let getTask = document.querySelector(".task");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    let getVideo = document.querySelector(".index-banner");
    getTask.innerHTML = '<div class="task-attack">Task: Find an enemy!</div>';
    getActions.innerHTML = '<a href="#" onclick="GameManager.setFight()">Search for enemy!</a>';
    getActions.style.visibility = "visible";
    getArena.style.vidibility = "visible";
    getVideo.innerHTML = '<img src="imgs/battel.jpg" alt="battel" class="img-battel">';
  },
  setFight: function() {
    let getTask = document.querySelector(".task");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    //create enemy!
    let enemy00 = new Enemy("Gobline", 100, 0, 50, 100, 100);
    let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getTask.innerHTML = '<div class="task-attack">Task: Choose your move!</div>';
    getActions.innerHTML = '<a href="#" class="ptn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="imgs/enemy/'+enemy.enemyType.toLowerCase()+'.png" alt="' + enemy.enemyType + '" ><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}
