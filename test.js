
var forEach = function(array, callback){
    
for(var i=0; i < array.length; i++){
    	var element = array[i]
    	callback(element)
    }
};


// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// // ----------------------------
// // using forEach() from above, write your own reduce()
// // that takes an array and a function
// // ----------------------------

// var reduce = function(array, callback){

// 	var result = array[0]
// 	var newArray = array.slice(1)
// 	forEach(newArray, function(el) {	
// 		result = callback(el, result)

// 	})

// 	return result;
// }


// // tests
// // ---
// console.assert(
//     reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
// )



// function map(array, callback){
//    var result = [];
//    forEach(array, function(element) {
//    	result.push(callback(element));
//    });
//    return result;
// }

// // tests
// // ---
// var squares = map([1, 2, 3, 4], function(v){ return v*v })
// console.assert(squares[0] === 1)
// console.assert(squares[1] === 4)
// console.assert(squares[2] === 9)
// console.assert(squares[3] === 16)

// //     var newArray = [];
// //     for(var i=0; i < array.length; i++){
// //     	var newElement = callback(array[i]);
// //     	newArray.push(newElement);
// //     }
// //     return newArray;
// // };


// function filter(array, callback){
//     var newArray = [];
//     forEach(array, function(el){
//     	if (filt){
//     		newArray.push(filt);
//     	}
//     }
//     return filt;
// }

// // tests
// // ---
// var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
// console.assert(evens[0] === 2)
// console.assert(evens[1] === 4)



function filter(array, callback){
    var accepted = [];
    for (var i = 0; i < array.length; i++){
    	if (callback(array[i]))
    		accepted.push(array[i]);
    }
     return accepted;
    }


// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)










