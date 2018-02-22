// Ease and Wizz 2.0.3 : inOutExpoSmoothStarEnd : All keyframes
// based on Ease and Wizz 2.0.3 : inOutExpo : All keyframes Ian Haigh (http://ianhaigh.com/easeandwizz/)
// modified for smoother Start and End
// some defaults
var p = 0.8;		// period for elastic
var a = 50;		// amplitude for elastic
var s = 1.70158;	// overshoot amount for "back"
function easeandwizz_inOutExpo(t, b, c, d) {
	if (t==0) return b;
	if (t==d) return b+c;
	if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
	return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
function easeAndWizz() {
	var n = 0;
	if (numKeys > 0) {
		n = nearestKey(time).index;
		if (key(n).time > time)	{ n-- }
	}
	try {
		var key1 = key(n);
		var key2 = key(n+1);
	} catch(e) {
		return null;
	}
	
	// determine how many dimensions the keyframes need
	var dim = 1; // It's gotta have at least ONE dimension
	try {
		key(1)[1];
		dim = 2;
		key(1)[2];
		dim = 3;
	} catch(e) {}
	t = time - key1.time;
	d = key2.time - key1.time;
	sX = key1[0];
	eX = key2[0] - key1[0];
	if (dim >= 2) {
		sY = key1[1];
		eY = key2[1] - key1[1];
		if (dim >= 3) {
			sZ = key1[2];
			eZ = key2[2] - key1[2];
		}
	}
	if ((time < key1.time) || (time > key2.time)) {
		return value;
	} else {
		if(time < key1.time + d/10){ //in the lower 10% of transistion
			t = d/10;
		} else if(time > key1.time + d*9/10){//in the upper 10% of transition
			t = d*9/10;
		}
		val1 =  easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);
		switch (dim) {
			case 1:
			     retVal = val1;
			     break;
			case 2:
			     val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);
			     retVal = [val1, val2];
			     break;
			case 3:
			     val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);
			     val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);
			     retVal = [val1, val2, val3];
			     break;
			default:
			     return null;
		}

		if(time < key1.time + d/10){ //in the lower 10% of transistion
			return (retVal-key1)/(d/10)*(time-key1.time)+key1
		} else if(time > key1.time + d*9/10){//in the upper 10% of transition
			return (key2-retVal)/(d/10) * (time-(key1.time+d*9/10)) + retVal
		} else{
			return retVal;
		}
		
	}
}
(easeAndWizz() || value);
