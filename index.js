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
// let food = [ "street" , "3star", "5star"]
// for (let foodi of food) {
//     console.log("food: " +foodi)
// }

//34th oops concept
// let person = {
//     name : "Arun",
//     age : 23,
    
//     char : ['he is fun loving person'],
//     address : {
//         city : "salem",
//         state : "tamilnadu",

//     },
// // // console.log(person)
// // function greeting() {
// //     let msg = "hey " + name + " come and join the party @jan1"
// //     console.log(msg)
// // }
// // console.log(greeting)
//     isAlive : true,
//     greeting: function() {
//         // let msg = "hey " + this.name + " come and join the party @jan1" + this.char
//         //  or
//         let msg = `hey ${this.name}, come and join the party @jan1 ${this.char}`
//         console.log(msg)
//     }   
// };
// // console.log(person.address)
// console.log(person.greeting())

//34(a)oops assignment
// let family = {
//     plan : 'go to goa',
//     date : "jan1",
//     transport : 'flight',
//     persondetail : {
//         person1 : 'Abi',
//         person2 : 'suji',
//         person3 : 'arav',
//         person4 : 'karthi'
//     },
//     greeting : function() {
//         let detail = `ready for plan ${this.plan} via ${this.transport} on ${this.date}`
//         console.log(detail)
//     }

// }
// family.greeting();
// // console.log(family.greeting())
// // console.log(family)

//35th factory function ( one logic and give more i/p )

// function createPerson(name) {
//     return {
//         name,
//         greeting() {
//             let msg = `hey my name is ${this.name}`;
//             console.log(msg)
//         }
//     }
// }
// let name1 = createPerson("abi" );
// let name2 = createPerson("suji");
// name1.greeting()
// name2.greeting()

//(a)assignment
// //let ques = "how r u"
// function hello(ques) {
//     let x =  `Hey ${ques}  `
//     console.log(x)
// }
// hello('hekosokd')
// hello('abishekd')

//(b)
// function createMsg(ques) {
//     return {
//     ques,
//     greeting() {
//     let x =  `Hey ${ques}  `
//     console.log(x)
//     }
// }
// }
// let ques1 = createMsg('who r u')
// let ques2 = createMsg('whr r u from')
// ques1.greeting()
// ques2.greeting()

//36th factory func

// function addName(name) {
//     return {
//     name,
//     msg() {
//         console.log(`hello ${name}`)
//     }
// }
// }
// let name1 = addName('abishek')
// let name2 = addName('deepak')
// name1.msg()
// name2.msg()

//37 constructor fn  // {pascal --> MyFirstName}
// function Name(name) {
    
//     this.name = name;
//     this.msg = function() {
//         console.log(`hello ${name}`)
//     }
// }
// let name1 = new Name("abishek")
// let name2 = new Name("deepak")
// name1.msg()
// name2.msg()

//38th dynamic obj
// const person = {
//     name : "abishek",
// }

// console.log(person)

//39th assignment

// function Newperson(name) {
//     return {
//         name,
//         greeting(Newname) {
//             let msg = `Welcome ${name}`
//             console.log(msg)
//         }
//     }
// }
// // console.log(Newperson)
// let name1 = Newperson("Abishek");
// let name2 = Newperson("Abi");
// name1.greeting()
// name2.greeting()

//40th constructor property

// let name = new String("jddwd");
// let age = new Number(34);
// let isAlive = new Boolean(true);

// console.log(name,age, isAlive)

//41th functions are object
// function Newperson(name) {
//     this.name = name;
//     this.greeting = function() {
//         console.log(`hello ${name}`)
//     }
// }

// let person2 = new Function(
//     'name',
//     `this.name = name;
//     this.greeting = function() {
//         console.log(hello)
//     }`
//     )
// const person = new Newperson("balaji")
// person.greeting()

//42nd primitive type vs reference type
//reference type
// let x = 5;
// let y = x;

// x=10;
//console.log(y)

//(a)primitive type we cant change value
// let mark = 10;

// function value(mark) {
//     mark++,
//     console.log(`your mark is ${mark}`)
// }
// value(mark)

//(b)use obj reference type value os increased (+1)
// let marks = {
//     value : 10,
//     age : 23
// }

// function value(mark) {
//     mark.value++,
//     console.log(marks)
// }
// value(marks)

//43 to know some methods in object
// const user = {
//     name : "hello",
//     age : 23,
//     isAlive : true,
// }
// for (let key in user ) {
//     console.log(key,":", user[key])
// }

// for (let key of Object.keys(user) ) {
//     console.log( key)
// }

// for (let key of Object.entries(user) ) {
//     console.log( key)
// }

//44th enumerating properties ( to find or checkout this one is there or not)
// const user = {
//     name : "hey",
//     greeting() {
//         console.log(`name is ${name}`);
//     }
// }

// if ( 'name' in user) {
//     console.log("yes")
// }
// else {
//     console.log("no")
// }

//45th cloning an object
// const detail = {
//     name : "Aathira",
//     greeting() {
//         console.log(`my best frd name is ${this.name}`)
//     }
// }
// // detail.greeting()

// // let another = Object.assign({
// //     age : 24
// //     }, detail) ;
// // console.log(another)

// let other = {
//    age:24, 
//    ...detail
// }
// console.log(other)


//46th Memory in JS (garbage collection) its all used by js engine (automatic)
// Js inbuild objects

// console.log(Math.abs(-3))
// //math operation
// // Math.round
// // Math.random

// example code
// console.log(Math.max(23,24,54,92,73))

//-a
// let a = [65,86,85,9,96,58];
// console.log(Math.min(a))

//-b use spread operator
// let a = [65,86,85,9,96,58];
// let b = Math.max(...a)
// console.log(b)

//47th more strings & methods are there  just analysis the above link
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// let msg = "hey what r u doing? "
// // let result = msg.trim()
// // let result = msg.split(' ', 6)
// let result = msg.substr(3)
// console.log(result)


//48th template literals ( ` this is literals)
// const name = "Arun";
// const msg =  `hey ${name}
// how r u `
// const ans = `
// i am fine
// what about u`
// console.log(name ,msg , ans)

//49th Date()

// const date = Date()

// const now = new Date()

// const hello = new Date('dec 4 2017')
// console.log(date)
// console.log(now.getFullYear())
// console.log(hello.getDay())

//50th javascript Arrays
// const name = ["hey", "hello", "hii"];
// //push use for to add new  in last
// name.push("jdkm");
// //unshift use for to add new in front
// name.unshift("ej")
// //splice use for to add new in centre
// name.splice(3,0,"jd",true)

// console.log(name)



//51 finding element in an array
//primitive value eg : cupboard
// const item = ["apple", "orange", "grape", "apple"]
// //show index in console
// console.log(item.indexOf("orange"))
// console.log(item.lastIndexOf("apple"))

// // now finding
// console.log(item.indexOf("grape") !== -1)
// //another menthod
// console.log(item.includes("grape"))

//52
//reference value eg : route map
// const orders = [
//     {id : 2 , name : "abi", age : 21},
//     {id : 5 , name : "arun", age : 23},
//     {id : 5 , name : "bala", age : 25}
// ]
// let result = orders.findIndex(function(order){
//     return order.age === 23
// })
// console.log(result)

//assignment 
// let details = [
//     {name : "hello", age : 32, isAlive: true},
//     {name : "hel", age : 27, isAlive: true},
//     {name : "hell", age : 45, isAlive: false},
// ]
// let result = details.findIndex(function(detail){
//     return detail.name === "hel" 

// })
// console.log(result)

//53 arrow function
// let details = [
//     {name : "hello", age : 32, isAlive: true},
//     {name : "hel", age : 27, isAlive: true},
//     {name : "hell", age : 45, isAlive: false},
// ]
// let result = details.find((detail) => detail.name == "hel" )
// console.log(result)


//54th Removing element in an array
// const numb = [23, 34, 45, 49];
// //del end
// // numb.pop()

// //dele start
// // numb.shift()

// //dele middle
// numb.splice(2,1)
// console.log(numb)

//55th empty a array
// let num = [32, 543, 42, 35, 53,44];

// //soln:1
// num = []
// //soln:2
// // num.length = 0
// //soln : 3
// // num.splice(0,num.length)
// //soln : 4
// // while (num.length) num.pop ();

// console.log(num)

//56th
//combining arrays
// let name = ["hello","jeds", "ndmakms"]
// let mark = [32,31,13]
// //let full = name + mark // but it o/p is not in an array
// //combine
// let full = name.concat(mark)
// //extract to find centre array u use slice
// let centre = full.slice(2,4)
// console.log(full)
// console.log(centre)

//57
// let name = [
//     {item :"hello",age : 31},
//     {item :"heldo"},
//     {item :"hllo"}
// ];
// let mark = [32,31,13]

// let full = name.concat(mark)
// name[0].item = "Hellad"

// console.log(full)

//58 spread operator
// let name = ["Abi", "bala", "manoj"];
// let name2 = ["Arun", "balaji"]

// let list = [...name,...name2]
// console.log(list);

//59 iterating element in Array
// let dailyRoutine = ["jejw",23,true];
// // //for in 
// // for (let routine in dailyRoutine){
// //     console.log(dailyRoutine[routine])
// // }
// // //for of
// // for (let routine of dailyRoutine){
// //     console.log(routine)
// // }
// // //for-each
// // dailyRoutine.forEach(function(routine,routineIndex){
// //     console.log(routineIndex,routine)

// // })
// //for-each and use arrow function
// dailyRoutine.forEach((routine,routineIndex) => console.log(routineIndex,routine))

//60 Joining an Array
// const name = ["hello", "how", "r u"]
// let joinName = name.join(" ")
// console.log(name)
// console.log(joinName)

//61 split an array
// let fullName = "Abishek pandian";
// let name = fullName.split(" ");
// let firstName = name[0]
// let secondName = name[1]
// console.log(name)
// console.log(firstName)

//62 assignment split and join 
let hotelName = "pizza Hut";
let split = hotelName.toLowerCase().split(" ")
let display = split.join("_")
console.log(display)
console.log(split)