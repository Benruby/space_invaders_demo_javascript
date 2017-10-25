var Alien = function(width, height, xPosition, yPosition) {
	this.width = width;
	this.height = height;
	this.xPosition = xPosition;
	this.yPosition = yPosition;
	this.element;
}

Alien.prototype.show = function() {
	this.element = document.createElement("div");
	this.element.className += "alien";
	this.element.style.width = this.width + "px";
	this.element.style.height = this.height + "px";
	// this.element.style.top = this.yPosition + 20 + "px";
	// this.element.style.left = this.xPosition  + 20 + "px";
	// document.getElementById("alien-section").appendChild(this.element);
}

Alien.prototype.explodeAndRemove = function() {
	this.element.parentNode.removeChild(this.element);

}