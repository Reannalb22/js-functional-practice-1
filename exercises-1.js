//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

var forEach = function(array, callback){
    // var newArray = [];
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

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

var reduce = function(array, callback){
	var result = array[0]
	var newArray = array.slice(1)
	forEach(newArray, function(el) {	
		result = callback(el, result)

	})

	return result;
}



// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, tot){ return a*tot }) === 24
)

// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

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

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

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


// ----------------------------
// using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------

// function sum(){
//     YOUR CODE HERE
// }

// tests
// ---
// console.assert(sum(1, 2, 3) === 6)
// console.assert(sum(1, 2, 3, 4) === 10)
// console.assert(sum(1, 2, 3, 4, 5) === 15)

// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

// var names = [
//     {name:"Matt", alma_mater:"Univ of Texas - Austin"},
//     {name:"Brian", alma_mater:"Texas A&M"},
//     {name:"Jesse", alma_mater:"Univ of Texas - Austin"}
// ]

// names.sort(function(a, b){
//     YOUR CODE HERE
// })

// tests
// ---
// console.assert(names[0].name === "Brian")
// console.assert(names[1].name === "Jesse")
// console.assert(names[2].name === "Matt")

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

// var customers = [
//     { first: 'Joe', last: 'Blogs'},
//     { first: 'John', last: 'Smith'},
//     { first: 'Dave', last: 'Jones'},
//     { first: 'Jack', last: 'White'}
// ]

// var results = customers
//     .filter(function(){
//         YOUR CODE HERE
//     })
//     .map(function(){
//         YOUR CODE HERE
//     })
//     .sort(function(){
//         YOUR CODE HERE
//     })

// tests
// ---
// console.assert(results[0].fullname === "Jack White")
// console.assert(results[2].fullname === "John Smith")