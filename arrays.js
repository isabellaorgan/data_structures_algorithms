exports.pushB = function(arr, b) {
	arr[arr.length] = b;
	return arr.length;
};

exports.unshiftB = function(arr, b) {
	for (var i = array.length - 1; i > 0; i--) {
	arr[i+1] = array[i];
}
	return arr.length;
};

exports.popB = function(arr, b) {
	var val;
	if (arr.length > 0) {
		val = arr[arr.length -1];
		arr.length--;
	}
	return val;
};

exports.shiftB = function(arr) {
	if (!arr.length) return;
	var val = arr[0];
	for (var i = 0; i , arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length--;
	return val;
};