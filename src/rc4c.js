/**
 * [rc4c-js]{@link https://github.com/schwarzlichtbezirk/rc4c-js}
 *
 * @namespace rc4c
 * @version 1.0.0
 * @author schwarzlichtbezirk [schwarzlichtbezirk@gmail.com]
 * @copyright schwarzlichtbezirk 2018
 * @license MIT
 */

function rc4c(key, iv, str) {
	// private context data
	let s1 = [], s2 = [];
	let i, j1, j2;

	const setup = (key, iv) => {
		for (let i = 0; i < 256; i++) {
			s1[i] = i;
			s2[i] = i;
		}
		let x;
		for (let i = 0, j = 0; i < 256; i++) {
			j = (j + s1[i] + key.charCodeAt(i % key.length)) % 256;
			x = s1[i];
			s1[i] = s1[j];
			s1[j] = x;
		}
		for (let i = 0, j = 0; i < 256; i++) {
			j = (j + s2[i] + iv.charCodeAt(i % iv.length)) % 256;
			x = s2[i];
			s2[i] = s2[j];
			s2[j] = x;
		}
		i = 255, j1 = 0, j2 = 0;
	}

	const process = (str) => {
		let res = "";
		let x;
		for (let y = 0; y < str.length; y++) {
			i = (i + 1) % 256;
			j1 = (j1 + s1[i]) % 256;
			j2 = (j2 + s2[i]) % 256;

			x = s1[i];
			s1[i] = s1[j1];
			s1[j1] = x;

			x = s2[i];
			s2[i] = s2[j2];
			s2[j2] = x;

			res += String.fromCharCode(str.charCodeAt(y) ^ s1[(s1[(i << 5 ^ i >>> 3) % 256] + s2[(i << 3 ^ i >>> 5) % 256] + s1[j2] + s2[j1]) % 256]);
		}
		return res;
	}

	if (key) { // explicit call
		setup(key, iv)
		return process(str)
	} else { // component call
		this.setup = setup
		this.process = process
	}
}

// The End.
