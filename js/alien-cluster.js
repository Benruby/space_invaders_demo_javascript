var AlienCluster = function(rowNumber, aliensNumberInRow, speed, clusterClass, alienClass) {
	this.clusterClass = clusterClass;
	this.alienClass = alienClass;
	this.rowNumber = rowNumber;
	this.aliensNumberInRow = aliensNumberInRow;
	this.speed = speed;
	this.element;
	this.aliens = [];
}

AlienCluster.prototype.addAliensToCluster = function(aliens) {

}

AlienCluster.prototype.show = function() {
	this.element = document.createElement("table");
	this.element.className += this.clusterClass;
	var tbody = document.createElement("tbody");

	var i;
	var index = 0;
	for (i = 0 ; i < this.rowNumber ; i++) {
		var tr = document.createElement("tr");
		tbody.appendChild(tr);

		var x;
		for (x = 0 ; x < this.aliensNumberInRow ; x++) {

			var td = document.createElement("td");
			tr.appendChild(td);
			td.className += this.alienClass;
			td.appendChild(aliens[index].element);
			index +=1;
		}
	}

	this.element.appendChild(tbody);
	document.body.insertBefore(this.element, document.body.firstChild);
	var self = this;
	var checkForAliens = setInterval(function(){
		if(!self.aliens.length){
			alert("You saved earth!");
			clearInterval(checkForAliens);
			self.destroyCluster();
			pressedKeys = {};
		}
	}, 100)

}


AlienCluster.prototype.moveLeft = function() {

	if(!this.element){
		return;
	}

	var self = this;

	var tableMovment = setInterval(function(){
		if(!self.element){
			clearInterval(tableMovment);
			return;
		}
		var leftPos = self.element.offsetLeft;
		var tableLeftBorder = self.element.getBoundingClientRect().left;
		var windowWidth = window.innerWidth;

		if (tableLeftBorder > 5) {
			leftPos -= self.speed + 5;
			self.element.style.left = leftPos + "px";

		} else {
			clearInterval(tableMovment);
			self.fallOneStep();
			self.moveRight();
		}

	}, 500);
}

AlienCluster.prototype.moveRight = function() {

	if(!this.element){
		return;
	}

	var self = this;

	var tableMovment = setInterval(function(){
		if(!self.element){
			clearInterval(tableMovment);
			return;
		}
		var leftPos = self.element.offsetLeft;
		var tableRightBorder = self.element.getBoundingClientRect().right;
		var windowWidth = window.innerWidth;

		if (tableRightBorder < window.innerWidth - 20) {
			leftPos += self.speed + 5;
			self.element.style.left = leftPos + "px";

		} else {
			clearInterval(tableMovment);
			self.fallOneStep();
			self.moveLeft();
		}

	}, 500);
}

AlienCluster.prototype.fallOneStep = function() {

	if(!this.element){
		return;
	}

	var elementDistanceFromTop = this.element.offsetTop;

	var windowHeight = window.innerHeight;

	var elementHeight = this.element.clientHeight;

	var topPos = elementDistanceFromTop;

	if ((windowHeight - elementDistanceFromTop) > elementHeight + 50) {
		topPos += this.speed * 2;
		this.element.style.top = topPos + "px";
	} else {
		alert("Game over");
		this.destroyCluster();
		pressedKeys = {};
	}

}

AlienCluster.prototype.startInvading = function() {
	this.moveRight();
}

AlienCluster.prototype.addAliens = function(aliens) {
	this.aliens = aliens;
}

AlienCluster.prototype.destroyCluster = function() {
	this.element.parentNode.removeChild(this.element);
	this.element = null;
}