// 1.create atleast 3 array object

// let a = [1,22,3,4,5];

// a[6] = 1;

// a.length = 0;

// console.log(a)

//2nd Take the below array and copy it using the slice method and the for loop method. - [🎬 Video] [Solution]
//(a)slice method
// var array = [1, 2, 3, 4, 5,2,4,5,53,35,35];

// let result = array.slice(4,9);

// console.log(result)

//(b) for loop
// var array = [1, 2, 3, 4, 5,2,4,5,53,35];
// let tempArray = []
// for (let i=0 ; i < array.length ; i++ ) {
//     //console.log(i)
//     tempArray[i] = array[i]
// }
//  console.log(tempArray)

//3rd Empty this array: - [🎬 Video] [Solution]

// var array = [1, 2, 3, 4, 5]
// //method 1 
// // array.length = 0
// //method 2
// // array = []
// //method 3
// // while (array.length) {
// //     array.pop()
// // }
// //method 4
// array.splice(0,array.length)

// console.log(array)

//4th What type is an Array set to?
// let a = [{1,23,42,24,14}]

// console.log(typeof a)

//5th Add an item to the array
// let a = [1,23,4,2,21,4,1]
// //method1
// // a.push("122")
// //method 2 
// //a.unshift("hello")
// //method 3
// a[a.length]= "neq"

// console.log(a)

//6th Find the index position of d in this array - [🎬 Video] [Solution]

// var arr = ["a", "b", "c", "d"];

// let b = arr.indexOf("d")

// //let b = arr.indexOf("x") //not in an array mean show the o/p -1

// console.log(b)

//7th Write a function to check if milk exists in your array. - [🎬 Video] [Solution]

// var items = ["milk", "bread", "sugar"];

// // let result = items.indexOf("milk")
// function result(value) {
    
//     if (items.indexOf(value) == -1) {
//         console.log("item not exist")
//     }
//     else {
//         console.log("item is there")
//     }
// }
// result("milk")

//8th  Now you've found milk exists add some code to find the index of milk and remove that item. - [🎬 Video] [Solution]
// var items = ["milk", "bread", "sugar"];

// // let result = items.indexOf("milk")
// function result(value) {
//     let index = items.indexOf(value)
//     if (index == -1) {
//         console.log("item not exist")
//     }
//     else {
//         items.splice(index,1)
//         console.log("item is there")
//         console.log(items)
//     }
// }
// result("milk")

//9th List the ways to loop over an array
// for
// for in
// for of
// for each

//10th Write some code to put these numbers in order (Ascending & Descending) - [🎬 Video] [Solution]

// var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];

// let result = numbers.sort((a,b) =>{
//     if (b >  a) return -1
// })
// // let result2 = numbers.sort((a,b) =>{
// //     if (b < a) return -1
// // })

// console.log(result)
// //console.log(result2)

//10th Write some code to place this list in alphabetical order - [🎬 Video] [Solution]

// var p = ["a", "z", "e", "y"];

// let result = p.sort((a,b)=> {
//     if (a < b) return -1
// })
// console.log(result)

//11th What is the length of these arrays - [🎬 Video] [Solution]

// var arr1 = [, , ,];

// var arr2 = new Array(3);

// var arr3 = [1, 2, 3, 4, 5];

// var array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(arr2)
// console.log(array[1].length)

//12th What are the results of these splice and slice methods - [🎬 Video] [Solution]

// var a = ["zero", "one", "two", "three"];
// var names = ["jason", "john", "peter", "karen"];

// var sliced = a.slice(1,3);
// var spliced = names.splice(1, 3);

// console.log(sliced)
// console.log(names)

//13.What are the console logs of these shift and unshift methods - [🎬 Video] [Solution]

// var a = [];

// // We take an empty array and

// a.unshift(1);
// a.unshift(22);
// var b = console.log(a);
// a.shift();
// var c = console.log(a);
// a.unshift(3, [4, 5]);
// var d = console.log(a);
// a.shift();
// var e = console.log(a);
// a.shift();
// var f = console.log(a);
// a.shift();
// var g = console.log(a);

//14th  Using reduce add all these numbers - [🎬 Video] [Solution]

// var numbers = [1, 2, 3, 4, 5, 6];

// let result = numbers.reduce((a,b)=> {
    
//     return b - a
// })
// console.log(result)

//15th Flatten this array to one single array using reduce - [🎬 Video] [Solution]

// var array = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ];

//   let result = array.reduce((a,b)=> {
//      return a.concat(b)
//   },[])
//   console.log(result)

//16th Filter this array to return just the dogs - [🎬 Video] [Solution]

// var animals = [
//     { name: "Jason", species: "rabbit" },
//     { name: "Jessica", species: "dog" },
//     { name: "Jacky", species: "owl" },
//     { name: "Luke", species: "fish" },
//     { name: "Junior", species: "rat" },
//     { name: "Thomas", species: "cat" },
//   ];

//   let result = animals.filter((value)=> {
//     return value.species == 'dog'
//   })
//   console.log(result)

//17. use Map function in this array - [🎬 Video] [Solution]

// var animals = [
//     { name: "Jason", species: "rabbit" },
//     { name: "Jessica", species: "dog" },
//     { name: "Jacky", species: "owl" },
//     { name: "Luke", species: "fish" },
//     { name: "Junior", species: "rat" },
//     { name: "Thomas", species: "cat" },
//   ];

//   let result = animals.map((value)=> {
//     return  value.name + " is a " +value.species 
//   })
//   console.log(result)


// add new names

function addName(name) {
  return {
  name,
  greeting() {
    console.log(`my name is ${name}`)
  }
  }
}
let name = addName("abishek")

name.greeting()



