function rge(start,end) {
	var res = []
	for(var i=start; i <= end; i=i+1)
		res.push(i)
	return res
}

function sumNums(nums) {
	var sum=0
	for(var i=0; i < nums.length; i=i+1)
		sum += nums[i]
	return sum

}
function rgeS(start,end,step) {
	var jump = 1
	if(arguments.length == 3)
		jump = step
	var res = []
	var i = start
	if (step > 0) {
		for(var i=start; i <= end; i=i+jump) {
			res.push(i)
		}
	}
	else {
		for(var i = start; i >= end ; i = i + jump) {
			res.push(i)
		}
	}
		
	return res
}


console.log(rge(1,10))
console.log(sumNums([1,2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(rgeS(1,10,2))
console.log(rgeS(1,10,2))
console.log(rgeS(5,2,-1))


