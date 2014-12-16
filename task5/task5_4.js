// task 5.4 

function execFunctions(arrOfFunctions) {
	function doIt(elem){
		return elem();
	}
	return arrOfFunctions.map(doIt);
}