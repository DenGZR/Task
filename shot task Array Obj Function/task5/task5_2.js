// task 5.2   http://jscourse.com/task/is-in-array

function isInArray(arr) {
  var result, arg=[]  ;
  
  function checkItem(elem){
  	for(var i=0; i<arr.length; i++){
  		if (elem === arr[i]) {
  			return true;
  		}  	
  	}
  	return false;
  }

  for(var i=1; i<arguments.length; i++){
  	arg[i-1]=arguments[i];
  }

 
 result=arg.every(checkItem);
 console.log(result);
 return result; 
 
}