function arrayToList(arr) {
	var lst = null
	for(var i = arr.length-1; i >= 0; i=i-1) {
		lst = {value:arr[i],rest:lst}
	}
	return lst

	
}

function listToArray(lst) {
	var arr = []
	for(var v = lst; v; v = v.rest) {
		arr.push(v.value)
	}
	return arr

}

function prepend(lst,ele) {
	return {value:ele.value,rest:lst}

}
//n is index, so 0 is first , 1 is second
function nth(lst,n) {
	var a = {value:undefined,rest:null}
	for(a = lst;a && n != 0; a=a.rest,n=n-1){}
	if (n != 0) return undefined
	else return a.value
}
function nthRecur(lst,n) {
	if (n == 0)
		return lst.value
	else {
		if (lst.rest != null)
			return nthRecur(lst.rest,n-1)
		else return undefined
	}
}
function showList(lst) {
	var res = []
	while(lst.rest != null) {
		res.push(lst.value)
		lst = lst.rest
	}
	res.push(lst.value)
	return res

}

console.log(arrayToList([1,2,3,4,5,6]))
var x = arrayToList([1,2,3,4,5,6])
console.log(showList(x))
console.log(listToArray(x))
console.log(listToArray(prepend(x,{value:0,rest:null})))
console.log(nth(x,4))
console.log(nthRecur(x,4))
