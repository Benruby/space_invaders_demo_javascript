var startXposition = window.innerWidth / 2 - 75;
var startYposition = window.innerHeight - 60;

var axisInterval;
var fireInterval;

var spaceship = new Spaceship(
	startXposition,
	startYposition
	);

spaceship.show();

//create the alien array
var aliens = [];
var alienWidth = 50;
var alienHeight = 50;
for (var i = 0; i < 20 ; i++) {
	aliens[i] = new Alien(alienWidth, alienHeight, 20, 20);
	aliens[i].show();
}

//create the table
var table = document.createElement("table");
var tbody = document.createElement("tbody");
var tr1 = document.createElement("tr");
var tr2 = document.createElement("tr");
table.appendChild(tbody);
tbody.appendChild(tr1);
tbody.appendChild(tr2);
var section = document.getElementById("alien-section");
section.appendChild(table);

//populate the table
for (var x = 0 ; x < aliens.length ; x++){
	var td = document.createElement("td");
	td.appendChild(aliens[x].element);
	if (x < 10) {		
		tr1.appendChild(td);
	} else {
		tr2.appendChild(td);
	}
}


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
			spaceship.shoot(KeyID);
			break;
		}
	}
}
