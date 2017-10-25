/**
 * in order to maintain a continuous key press mechanism
 * this object holds the state of the keypress.
 *
 * for example, while holding right arrow: pressing 'spacebar'
 * eill break the movement of the spaceship.
 *
 * maintaining the 'move right state' will keep it
 * moving right until a keyup event with the right code will
 * stop it. 
 */

var pressedKeys = {};

function setKeyStateTrue(keyCode){
	pressedKeys[keyCode] = true;
}

function setKeyStateFalse(keyCode){
	pressedKeys[keyCode] = false;
}

function testIfKeyIsPressed(keyCode) {
	return !!pressedKeys[keyCode];
}