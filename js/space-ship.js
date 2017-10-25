var Spaceship = function(xPosition, yPosition) {
	this.height = 50;
	this.width = 150;
	this.xPosition = xPosition;
	this.yPosition = yPosition;
	this.element;
}

Spaceship.prototype.show = function(){
	var self = this;

	this.element = document.createElement("div");
	this.element.className += "spaceship";
	this.element.style.width = this.width + "px";
	this.element.style.height = this.height + "px";
	this.element.style.top = this.yPosition + "px";
	this.element.style.left = this.xPosition + "px";
	document.body.appendChild(this.element);
}

Spaceship.prototype.shoot = function(keyCode){
	if (!keyCode) {return;}
	var shot = new Shot(
		this.xPosition +50,
		this.yPosition - 50,
		10);
	shot.show();
	shot.launch();
}

Spaceship.prototype.move = function(keyCode) {
	
	if (!keyCode) {return;}

	if (this.xPosition < 19 || this.xPosition > window.innerWidth - this.width) {
		setKeyStateFalse(keyCode);
		return;
	}

	switch(keyCode) {

		case 37:
		this.xPosition = (this.xPosition > 30) ? this.xPosition -= 15 : this.xPosition;
		this.element.style.left = this.xPosition + "px";
		break;

		case 39:
		this.xPosition = (this.xPosition < window.innerWidth - this.width - 30) ? this.xPosition += 15 : this.xPosition;
		this.element.style.left = this.xPosition + "px";
		break;
	}

}

