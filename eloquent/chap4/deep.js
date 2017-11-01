var obja = {a : {aa:"hello",ab:{ab1:"yes",v:100}},b: 2}
var objb = {a : {aa:"hello",ab:{ab1:"yes",v:100}},b: 2}

function showObj(inObj,depth) {
	for (var a in inObj) {
		if( typeof inObj[a] == "object"){
			console.log(depth,a)
			showObj(inObj[a],depth+ " ")
		}
		else{
			console.log(depth,a,inObj[a])
		}

	}
}
function countProps(obj) {
	var count = 0
	function check(obje) {
		for (var a in obje) {
			if( typeof obje[a] == "object") {
				check(obje[a])
				count++
			}
			else {
				count++
			}
		}
	}
	check(obj)
	return count

}

function deepComp(obj1,obj2) {
	function contains(name,val,obj) {
		for(var v in obj) {
			if (typeof obj[v] == "object") {
				return contains(name,val,obj[v])
			}
			else {
				if(v === name && obj[v] === val){
					return true
				}
					
			}
		}
		return false
	}
	function check(o1,o2) {
		for (var v in o1){
			if( typeof o1[v] == "object") { 
				 return check(o1[v],o2)
			}
			else {
				if(!contains(v,o1[v],o2)){
					return false
				}
			}
		}
		return true
	}

	var res = check(obj1,obj2)
	console.log(res)


}
//showObj(obja,"")

//deepComp(obja,objb)

//console.log(countProps(obja))
deepComp(obja,objb)
