var Shot = function(xPosition, yPosition, speed){
	this.width = 10;
	this.height = 30;
	this.xPosition = xPosition;
	this.yPosition = yPosition;
	this.speed = speed;
	this.element;
}


Shot.prototype.show = function() {
	this.element = document.createElement("div");
	this.element.className += "shot";
	this.element.style.width = this.width + "px";
	this.element.style.height = this.height + "px";
	this.element.style.top = this.yPosition + 20 + "px";
	this.element.style.left = this.xPosition  + 20 + "px";
	document.body.appendChild(this.element);
}

Shot.prototype.launch = function() {
	var self = this;

	function launchShot () {
		self.yPosition = self.yPosition - self.speed;
		self.element.style.top = self.yPosition +"px";

		if (self.checkHit()) {
			return;
		};

		if(self.yPosition > 0) {
			requestAnimationFrame(launchShot);
		} else {
			self.element.parentNode.removeChild(self.element);
			return;
		}

	}

	requestAnimationFrame(launchShot);
}

Shot.prototype.destroyShot = function() {
	this.element.parentNode.removeChild(this.element);
}

/**
 * check if the shot hits any alien
 * @return {[type]} [description]
 */
 Shot.prototype.checkHit = function() {

 	var shot = this.element.getBoundingClientRect();
 	for (var i = 0 ; i < alienCluster.aliens.length; i++) {

 		var currentAlien = alienCluster.aliens[i].element.getBoundingClientRect();

 		if (!(shot.right < currentAlien.left || 
 			shot.left > currentAlien.right || 
 			shot.bottom < currentAlien.top || 
 			shot.top > currentAlien.bottom))
 		{
 			alienCluster.aliens[i].explodeAndRemove();
 			alienCluster.aliens.splice(i, 1);
 			this.destroyShot();
 			return true;
 		} 
 	}

 }