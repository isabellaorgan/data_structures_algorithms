function unique(arr) {
  var uniqueArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqueArr.indexof(arr[i]) == -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
