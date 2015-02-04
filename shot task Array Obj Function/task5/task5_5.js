// task 5.5 http://jscourse.com/task/get-name-from-path
function getName(path) {
	var lengthArr,tempArr=[];
	function clear(elem){
		if (elem.length) {
			return true;
		} else{
			return false;
		};
	}

	tempArr=path.split('/').filter(clear);
	lengthArr=tempArr.length;

	
return	tempArr[lengthArr-1];
}