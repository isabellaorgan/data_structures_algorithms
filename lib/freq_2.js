exports.freq2 = function(arr) {
	var wordArr = '';
	for (var i = 0; i < arr.length; i++) {
		wordArr += arr[i];
	}
	var mostFreq = 0;
	var mostFreqLtr = [];
	var freqs = freqArr(wordArr);
	for (var ltr in freqs) {
		if (freqs[ltr] > mostFreqLtr) {
			mostFreqLtr = freqs[ltr];
		}
	}
	for (var ltr in freqs) {
		if (freqs[ltr] === mostFreqLtr) {
			mostFreqLtr.push(ltr);
		}
	}
	return mostFreqLtr;
};