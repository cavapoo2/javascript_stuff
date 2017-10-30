function countBs(str) {
	var num=0
	for(var i=0; i < str.length; i=i+1) {
		if(str[i] == "B") num=num+1
	}
	return num
}

function countChar(str,c) {
	var num=0
	for(var i=0; i < str.length; i=i+1) {
		if(str[i] == c) num=num+1
	}
	return num

}

console.log(countBs("ABb123BttB"))
console.log(countChar("ABb123BttB","B"))

