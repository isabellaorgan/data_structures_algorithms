function push(array, item) {
	array[array.length] = item;
}

function unshift(array, item) {
	for(vari = array.length - 1; i > 0; i--) {
		array[i+1] = array[i];
	}
	array[0] = item;
}

function willInherit(obj, property) {
	return !!(obj[property] && !obj.hasOwnProperty(property));
}

//disregarded this example, nested loop?

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

