//Task 9
//Преобразовать одномерный массив в двумерный
//Реализовать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число, возвращает новый массив.
//Число показывает количество элементов в подмассивах, элементы подмассивов беруться из массива data. 
//Оригинальный массив не должен быть изменен.

function toMatrix (data, rowSize) {
	var length,
	countArr,
	newArr=[],
	newArrLength,
	begin,
	end;

	length=data.length;
	newArrLength=Math.ceil(length/rowSize);
	begin = 0;
	end = rowSize ;		


	for(var i=0; i<newArrLength; i++){
		newArr[i]=data.slice(begin,end);
		begin = end ;
		end = end + rowSize;
	}

	
	console.log(newArr);
	return newArr;
}

toMatrix([1,2,3,4,5,6,7,8,9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
toMatrix([1,2,3,4,5,6,7], 3); // [[1,2,3], [4,5,6], [7]]
toMatrix([1,2,3], 5); // [[1,2,3]]
toMatrix([], 3); // []
