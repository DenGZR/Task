
templater('${who} ${number} years ${old}', {
 who: "I'm",
 number: 20,
 old: 'old'
});


function templater(templateString, dataObj) {
	var regExp=/\$+\{+[A-Za-z0-9- ]+\}/g,
	result,
	replacer = function(elem){
		var keySrt,
		objKey;

		keySrt=findKey(elem);
		console.log(keySrt);
		for(objKey in dataObj){
			if(keySrt === objKey){
				return	dataObj[objKey];
				
			}
		}
	return keySrt;
	},
	isEmptyDel = function(elArr) {
		if(elArr.length === 0){
			return false;
		}else{
			return true;
		}
	},
	 separeteElem = function(elem, sep){
		var result=[];

		result=elem.split(sep);
		result=result.filter(isEmptyDel);
		return result[0];
	},
	findKey = function (strArrElem) {
		
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
	};

	result = templateString.replace(regExp,replacer);
	console.log(result);
	return result;
};