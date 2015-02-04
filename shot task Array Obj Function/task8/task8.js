// task 8 
//Реализовать класс на прототипах

//конструктор
function Sequence( arr ){
	this.arr = arr;
}

// методы

Sequence.prototype.go = function(indexElem){
	this.index = this.checkIndex(indexElem);
	console.log(this.arr[indexElem]);
	return this.arr[indexElem];
}
Sequence.prototype.next = function(){
	this.index = this.checkIndex(this.index +1);
	console.log(this.arr[this.index]);
	return this.arr[this.index];	
}
Sequence.prototype.prev = function(){
	this.index = this.checkIndex(this.index -1);
	console.log(this.arr[this.index]);
	return this.arr[this.index];	
}
Sequence.prototype.checkIndex = function(elemNum){
	var length = this.arr.length-1;

	if( elemNum-length >1 ) {
		return length;
	}else{
		if(elemNum > length){
			return 0;
		}
		if(elemNum < 0){
			return length;
		}
		return elemNum;
	}	
}

Sequence.prototype.index = 0;

var s1 = new Sequence(['one', 'two', 'three'])
s1.go(2);  // 'three'
s1.next(); // 'one'
s1.next(); // 'two'