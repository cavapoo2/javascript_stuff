function nums() {
	for(var i=1; i <= 100; i= i+1) {
		var div3 = i % 3 == 0
		var div5 = i % 5 == 0
		var both = div5 && div3

		if (both) 
			console.log("FizzBuzz")	

		else if(div3){
			console.log("Fizz")
		}
		else if(div5) {
			console.log("Buzz")
		}
		else
		   console.log(i)
	}
}
nums()
			
