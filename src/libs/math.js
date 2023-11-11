Math.rand = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

Math.randFloat = function (min, max) {
	return Math.random() * (max - min) + min;
};

Math.sample = function (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
};
