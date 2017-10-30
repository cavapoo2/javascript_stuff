function revArray(input) {
	var out = []
	for(var i = input.length-1; i >=0; i =i-1)
		out.push(input[i])
	return out
}

function revArrayInPlace(input) {
	for(var i=0,j=input.length-1; i < input.length/2; i++,j--){
		var temp = input[i]
		input[i] = input[j]
		input[j] = temp
	}
	return input
		
}

console.log(revArray([1,2,3,4,5,6]))
console.log(revArrayInPlace([1,2,3,4,5,6]))
