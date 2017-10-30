function chessGrid(n,m) {
	for(var row = 0; row < n ; row = row+1){
		var h = ""
		for (var col =0; col < m; col = col +1) {
			if((row + col) % 2 == 0)
				h = h + "#"
			else
				h = h + " "
		}
		console.log(h)
	}
}
var r = 16
var c = 16

chessGrid(r,c)


