// task6.1 http://jscourse.com/task/array-like-object-to-array

function toArray(obj) {
	var	arr=[]; 
	

	for(var i=0; i<obj.length; i++){
		arr.push(obj[i]);
		
	}
	
	return arr;
}
toArray({0: 'one', 1: 'two', 2: 'three', length: 3});






templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
}); // 'mama mila ramu'


function templater(templateString, dataObj) {
	var arrStr,
	key=[];

	function isEmptyDel(elArr) {
		if(elArr.length === 0){
			return false;
		}else{
			return true;
		}


	}

	function separeteElem(elem, sep){
		var result=[];
debugger;
		result=elem.split(sep);
		result=result.filter(isEmptyDel);
		return result[0];
	}
	function findKey(strArrElem) {
		var someKey;

		if(strArrElem.indexOf('$')!== -1) {
			strArrElem=separeteElem(strArrElem, '$');
		}
		if(strArrElem.indexOf('{')!== -1) {
			strArrElem=separeteElem(strArrElem, '{')
		}
		if(strArrElem.indexOf('}')!== -1) {
			strArrElem=separeteElem(strArrElem, '}')
		}
		return strArrElem;
	}

	arrStr = templateString.split(' ');
	key = arrStr.map(findKey);
	console.log(key);
return key;
}
