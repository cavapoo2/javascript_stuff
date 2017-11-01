function arrayFlattenConcat(arrays) {
	return arrays.reduce(function(a,b) {
		return a.concat(b);
	},[]);
}

var x = [[1,2],[3,4],[5,6]]
console.log(x)
console.log(arrayFlattenConcat(x))
