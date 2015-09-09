
var forEach = function(array, callback){
    var newArray = [];
    for(var i=0; i < array.length; i++){
    	var newElement = callback(array[i]);
    	newArray.push(newElement);
    }
    return newArray;
};

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

var reduce = function(array, callback){
	var result; 
	forEach(array, function(element){
		result = callback(result, element);
	});

	return result;
}


// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
)



function map(array, callback){
   var result = [];
   forEach(array, function(element) {
   	result.push(callback(element));
   });
   return result;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)


