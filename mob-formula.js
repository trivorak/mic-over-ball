//Mic Over Ball Forumla
//(90-angle)/2 = output2
//((cotangent(output2))+1)*balldia(.125 default at BL)

function cotangent (degree) {
	return 1/Math.tan(degree)
}

function micOverBall (angle,ballDia) {
	return ((cotangent(toRadians(((90-angle)/2))))+1) * ballDia
}

function toRadians (degree) {    				// Converts Angles To Radians
	return degree * (Math.PI / 180);
}
