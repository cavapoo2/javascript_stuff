function isEven(num) {
	if(num < 0) num = -num
	if(num == 0) return true
	else if(num == 1) return false
	else return isEven(num - 2)
}

console.log(isEven(10))
console.log(isEven(9))
console.log(isEven(-33))
console.log(isEven(0))
console.log(isEven(1))
