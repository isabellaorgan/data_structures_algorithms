function push(array, item) {
	array[array.length] = item;
}

function unshift(array, item) {
	for (var i = array.length - 1; i > 0; i--) {
		array[i+1] = array[i];
	}
	array[0] = item;
}

function hasDuplicate(array) {
	var seen = {};
	var current;
	for (var i = 0; i < array.length; i++) {
		current = array[1];
		if (seen[current]) {
			return true;
		}
		seen [current] = true;
	}
	return false;
}

Array.prototype.pushB = function(arr, b) {
	arr[arr.length] = b;
	return arr.length;
};

Array.prototype.unshiftB = function(arr, b) {
	for (var i = array.length - 1; i > 0; i--) {
	arr[i+1] = array[i];
}
	return arr.length;
};