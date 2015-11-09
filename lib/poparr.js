exports.popB = function(arr, b) {
	var val;
	if (arr.length > 0) {
		val = arr[arr.length - 1];
		arr.length--;
	}
	return val;
};