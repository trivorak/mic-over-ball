module.exports = micOverBall;

function cotangent (degree) {
	return 1/Math.tan(degree)
}

function micOverBall (angle,ballDia) {
	return Math.round((((cotangent(toRadians(((90-angle)/2))))+1) * ballDia) * 10000) / 10000;
}

function toRadians (degree) {    				// Converts Angles To Radians
	return degree * (Math.PI / 180);
}
