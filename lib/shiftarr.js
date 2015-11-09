exports.shiftB = function(arr) {
	if (!arr.length) return;
	var val = arr[0];
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length--;
	return val;
};