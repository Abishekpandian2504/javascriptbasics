    //    alert (" hello ");

    // //    alert( 4 + 5);

    //    console.log("new 123 ");

//2nd    
// let name = "Abishek";
// let msg = "hello i'm "+ name + " app developer";

// alert (msg);

// console.log(msg);

//3rd mistake here(undefined)
// let name = 23 ;
// let msg ;

// alert (msg);

// console.log(name);

//4th
// let name = "Abishek ";
// let msg = "hey i am " + name + " learning javascript"; 

// console.log(msg);

//5th let and const diff ( let la name more time declare panikalam so we use const )
// // let name = "Abishek ";
// // name = "hello";
// const name = "Abishek ";
// const dob = "25=04-1999";
// //name = "hello";
// let msg = "hey i am " + name + " learning javascript and born on " +  dob ; 
// //msg = " hey dude";

// console.log(msg);


//6th data types modal
// let name = "Aravinth";  //string

// let age = 23;      //int or num


// let isYounger = true;  //boolean


// let lastName;    // undefined
// let lastName = undefined;


// let trophy = null;    //null we add extra things inn output result
// trophy = trophy1;


//7th brower console la u use ( typeof ) u see it is string or other
// let name = "Aravinth";  //string

// let age = 23;      //int or num


// let isYounger = true;  //boolean


// let lastName;    // undefined
// //let lastName = undefined;


// let trophy = null;    //null we add extra things inn output result
// //trophy = trophy1;

//8th using object
// // let name = "Aravinth";  //string
// // let age = 23;      //int or num
// // let isYounger = true;  //boolean
// // let address = " chennai, tamilnadu";

// let persondetail = {
//     name : "Aravinth",  //string
//     age : 23,     //int or num
//     isYounger : true,  //boolean
//     address : " chennai, tamilnadu",

// };

// console.log(persondetail)

//9th use notation to findout
// let persondetail = {
//     name : "Aravinth",  //string
//     age : 23,     //int or num
//     isYounger : true,  //boolean
//     address : " chennai, tamilnadu",

// };
// // persondetail.age = 25;

// // dot notation
// console.log(persondetail.age);

// // bracket notation
// console.log(persondetail['address']);

//10th object inside create one new obj
// let persondetail = {
//     name : "Aravinth",  //string
//     age : 23,     //int or num
//     isYounger : true,  //boolean
//     address : " chennai, tamilnadu",
//     parentname: {
//         father : "Arjunan",
//         mother : "Murugeswari"
//     }

// };
// // persondetail.age = 25;

// // dot notation
// console.log(persondetail.age);
// console.log(persondetail.parentname.father);

// // bracket notation
// console.log(persondetail['address']);

//11th Arrays
// let details = ["name" , "number", "email"];

// details[6] = "address";

// console.log(details);
// console.log(details[5]);
// console.log(details.length);

//12th Functions and create variables ( y we use func because we create one func and call that func in multiple operations)
// function newUser(firstName, lastName) {
//     let message = "hello i'm " + firstName + " " + lastName + " & learning javascript";
//     console.log(message)  
// }
// function operations(number1 , number2) {
//  result = number1 + number2;
//     console.log(result)
//     console.log(number1 * number2);
// }
// // variable + operator = expression(algorithm)

// newUser("Abishek", "pandian")
// newUser("Abishek2", "pandian2")
// operations(5,20)
// operations(40,2)

//13th assignment Operator
// let x = 5;
//  // x = x + 2,
//     x *= 3
// console.log(x)

//14th arithmatic operator
// let a = 3;

// //console.log(a);
// //increment
//  console.log(++a);
//  console.log(a++);
//  console.log(a++);
// //decrement
//  console.log(--a);
//  console.log(--a);
//  console.log(a--);
//  console.log(a--);

//15th comparison operator 

// // console.log( 5 > 3)
// let x = 5;
// //relation operator
// console.log( x > 8);
// console.log( x <= 5);
// //equality operator
// console.log ( x == 5);
// console.log ( x != 5)
// //string comparison
// console.log( "abishek" < "aravinth")
// //comparison of diff type
// console.log ('5' < 4)  //smart JS consider 5 < 4
// console.log(true == 1 )  // true=1 , false=0


//16th diff of equality operator

// //strict equality operator
// console.log( 1 === 1); // num === num
// console.log( '1' === 1); // str === num

// //lose equality operator
// console.log(1 == 1);
// console.log('1' == 1); // ==( '1' == '1') system consider first one string means 2nd also string


//17th ternary operator (hint : condition )

// let age = 27;

// // if (age > 18) {
// //     let type = 'adult';
// //     console.log(type);
// // }
// // else {
// //     let type = 'child';
// //     console.log(type);
// // }

// let type = age > 18 ?  'adult' : 'child' 
// console.log(type)


//18th logical operator
// // logical AND (&&)
// // return both operands are true
// console.log( 2<5 && 6<5 );
// console.log( true && true );

// // logical OR (||)
// //return true if any operand are true
// console.log( 2<5 || 6<5)
// console.log( true || false)

// // NOT (!) opposite of input
// console.log(!false)

//19th roughly think
// let income= 26000;
// let cibil= 650;

// if(income > 25000 && cibil > 600){
//     let Passed = " loan Eligible"
//     console.log(Passed)
// }
// else {
//     let notPassed = " loan not Eligible"
//     console.log(notPassed)
// }

//20th
// let income = true;
// let cibil = false;

// let loanStatus = income && cibil;

// console.log("status" + ": " + loanStatus)

//21th
// let income = 24000;
// let cibil =750;

// let loanStatus = income > 25000 && cibil > 700 ? "isApproved" : "isnotApproved"; 
// console.log(loanStatus)

//22nd 
//falsy(false not exact false ) or truthy

//logic perform
// let newName = "Abishek";
// let defaultName = "iphone";

// let setName = newName || defaultName;
// console.log(setName)

// 23rd conditions
// just imagine morn , afn, even one msg
// let hour = 24;

// if (hour< 12) {
//     console.log("Good morn");
// }
// else if (hour > 12 && hour < 16) {
//     console.log(" Good afn");
// }
// else if (hour > 16 && hour < 20){
//     console.log("good even")
// }
// else {
//     console.log("good night")
// }

//23(a) get system current date time use *new Date()*
// // let hrs = new Date();
// // let hour = hrs.getHours();

// // // console.log(hour);
// // // console.log(hour.getHours());

// let hour = new Date().getHours();

// if (hour< 12) {
//     console.log("Good morn");
// }
// else if (hour > 12 && hour < 16) {
//     console.log(" Good afn");
// }
// else if (hour > 16 && hour < 20){
//     console.log("good even")
// }
// else {
//     console.log("good night")
// }

//24th switch used to fnd like matching or not 
// // like to fingd grades in subject
// let x = 3
// switch(x)
// {
//     case 3 :
//     console.log("is true");
//     break; 
//     case 4 :
//     console.log("is not true");
//     break; 
//     default : 
//     console.log("wait")
//     break;
// }


//24(b) 
// let x = 30;
// switch(true)
// {
//     case x < 9 :
//     console.log("is one digit num");
//     break; 
//     case x < 99 :
//     console.log("is 2 digit num");
//     break; 
//     default : 
//     console.log("3 dig or bigger")
//     break;
// }

//25 assignment 
// let x= 999;

// if(x>10000 && x<60000){
//     console.log("buy android");
// }
// else if(x>=60000){
//     console.log("buy iphone");
// }
// else if(x<10000 && x>5000) {
//     console.log("buy basic phone");
// }
// else {
//     console.log("not affordable")
// }

//26th
// let x= 4999;

// switch (true) {
//     case x>=10000 && x<60000  :
//     console.log("buy android");
//     break;
//     case x>60000 : 
//     console.log("buy iphone");
//     break;
//     case x<10000 && x>=5000 :
//     console.log("buy basic phone");
//     break;
//     case x<5000 :
//     console.log("not affordable");
// }

//27th Loops
// // for(initialexpression ; condition ; step) {
// //     console.log()
// // }

// for( i=0; i<7 ; i++) {
//     console.log("hello",i);
// }

//28th
// for ( let i=0 ; i<=5; i++ ) {
//     if (i % 2 != 0) {
//         console.log("number " + i);
//     }
// }

//29th
// for ( let i=10 ; i>=0; i-- ) {
//     if (i % 2 != 0) {
//         console.log("number " + i);
//     }
// }

// 30th forin Loop
// let person = {
//     name : 'Abishek',
//     age : 23,
//     city : 'chn',
// }
// for ( let key in person ) {
//     console.log(key + ": ", person[key])
// }

//31 assignment
// let frdlist = {
//     frd1 : "arun",
//     frd2 : "balaji",
//     frd3 : "bala",
//     frd4 : "manoj"
// }
// for ( let key in frdlist) {
//     console.log(key + ": " + frdlist[key])
// }

//32 for in ( in array )
// let food = [ "street" , "3star", "5star"]
// for (let key in food) {
//     console.log(key + ": " +food[key])
// }
//33rd for of ( my remembarance of is like equato (=) )
let food = [ "street" , "3star", "5star"]
for (let foodi of food) {
    console.log("food: " +foodi)
}

