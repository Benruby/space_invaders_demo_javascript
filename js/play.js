var startXposition = window.innerWidth / 2 - 75;
var startYposition = window.innerHeight - 60;

var cannonCooldown = true;

var clusterRowNumber = 2;
var clusterAliensInRow = 10;
var clusterFallSpeed = 20;

var axisInterval;

var spaceship = new Spaceship(
	startXposition,
	startYposition);

spaceship.show();

var aliens = [];

for (var i = 0 ; i < 20 ; i++) {
	var alien = new Alien(50, 50, 20, 20);
	alien.show();
	aliens.push(alien);
}

var alienCluster = new AlienCluster(clusterRowNumber , clusterAliensInRow, clusterFallSpeed, "main-alien-table", "alien-position");


alienCluster.addAliens(aliens);
alienCluster.show();
alienCluster.startInvading();

document.onkeydown = function(){
	var KeyID = event.keyCode;
	keyPressByUser();
};

document.onkeyup = function(e){
	setKeyStateFalse(event.keyCode);
};

var keyPressByUser = function(){
	var KeyID = event.keyCode;

	if(!pressedKeys[KeyID]){

		switch(KeyID) {
			case 37:
			clearInterval(axisInterval);
			setKeyStateTrue(KeyID);
			axisInterval = setInterval(
				function(){
					if (pressedKeys["37"]) {	
						spaceship.move(KeyID);
					}
				}, 30);

			break;
			case 39:
			clearInterval(axisInterval);
			setKeyStateTrue(KeyID);
			axisInterval = setInterval(
				function(){
					if (pressedKeys["39"]) {	
						spaceship.move(KeyID);
					}
				}, 30);
			break;
			case 32:
			if (!cannonCooldown) {return;}
			cannonCooldown = false;
			setTimeout(function(){
				spaceship.shoot(KeyID);
				cannonCooldown = true;
			}, 150);

			break;
		}
	}
}
