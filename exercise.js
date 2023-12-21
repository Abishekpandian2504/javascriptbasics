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
var items = ["milk", "bread", "sugar"];

// let result = items.indexOf("milk")
function result(value) {
    let index = items.indexOf(value)
    if (index == -1) {
        console.log("item not exist")
    }
    else {
        items.splice(index,1)
        console.log("item is there")
        console.log(items)
    }
}
result("milk")