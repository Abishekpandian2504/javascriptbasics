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
// let hotelName = "pizza Hut";
// let split = hotelName.toLowerCase().split(" ")
// let display = split.join("_")
// console.log(display)
// console.log(split)

//63 sorting an Array
//(a)
// let name = ["Sarath", "yuvaraj", "vignesh", "sangeeth"]
// name.sort()
// console.log(name)

//(b)
// let detail = [
//    {name : "hello", age : 20, isAlive : true} ,
//    {name : "dhjdah", age : 24, isAlive : true} ,
//    {name : "dwndjand", age : 11, isAlive : true}, 
//    {name : "iqqek", age : 43, isAlive : true} ,
//    {name : "eieo", age : 63, isAlive : true} 
    
// ]
// detail.sort((a,b)=> {
//      if( a.age < b.age) return -1;
//      if( a.age > b.age) return 1;
//     return 0;
// })
// console.log(detail)

//63 allow only adult - Primitive type
// //(a) use every
// const age = [23, 13 , 34];
// let result = age.every((value,index,array) => {
//     return value>=18
// })
// //console.log(age)
// console.log(result)

// //(b)use some
// const age2 = [23, 13 , 34];
// let result2 = age2.some((value,index,array) => {
//     return value>=18
// })
// //console.log(age)
// console.log(result2)

//64 assignment
// let a = [2,4];
// let result = a.every((value) => {
//     return value % 2 == 0

// })
// console.log(result)

// //some
// let a = [1,2,3,4,5];
// let result = a.some((value) => {
//     return value % 2 == 0

// })
// console.log(result)


//65 testing element in JS array Reference type

// let detail = [
//     {id : 1, name : "abi", age : 21},
//     {id : 2, name : "suji", age : 14},
//     {id : 3, name : "karthi", age : 25},
// ]
// let result = detail.every((value)=>{
//     return value.age >= 18

// })
// let result2 = detail.some((value)=>{
//     return value.age >= 18

// })
// console.log(result)
// console.log(result2)

//66 filter
// let detail = [
//     {id : 1, name : "abi", age : 21},
//     {id : 2, name : "suji", age : 14},
//     {id : 3, name : "karthi", age : 25},
// ]
// let result = detail.filter((value)=>{
//     return value.age >= 18

// })
// let result2 = detail.filter((value)=>{
//     return value.age < 18

// })
// console.log( result)
// console.log(result2)

//67 to check odd or even and display
// let a = [1,2,3,4,5,6,32,45,21]

// let result = a.filter((value) => {
//     return value % 2 == 0
// })
// let result2 = a.filter((value) => {
//     return value % 2 != 0

// })
// console.log("even num : " , result)
// console.log("odd num : " , result2)

//68 reference type
// let cart = [
//     {id : 1 , item : "mobile", price : 15000},
//     {id : 2 , item : "tv", price : 8000},
//     {id : 3 , item : "ac", price : 25000},
//     {id : 4 , item : "dress", price : 2000}
// ]
// let result = cart.filter((value)=> 
//    // return value.price >=1000
//      value.price >=10000   
//  )
// console.log("your price is affordable for" ,result)

//69 finding an array
// let cart = [
//     {id : 1 , item : "mobile", price : 7000},
//     {id : 2 , item : "tv", price : 8000},
//     {id : 3 , item : "ac", price : 25000},
//     {id : 4 , item : "dress", price : 15000}
// ]
// let result = cart.find((value)=> 
//    // return value.price >=1000
//      value.price >=10000   
//  )
//  let result2 = cart.findIndex((value)=> 
//    // return value.price >=1000
//      value.price >=10000   
//  )
// console.log("your price is affordable for" ,result)
// console.log("index is" ,result2)

//70 mapping 
//primitive
// let a  = [1,2,3,4,5];
// let result = a.map((value,index) => {
//     return value * 2 
// })
// console.log(result)

//71 
//reference 
// const person = [
//     {id : 1 , firstName: "abishek", lastName : "pandian"},
//     {id : 2 , firstName: "arun", lastName : "pandian"},
//     {id : 3 , firstName: "bala", lastName : "muruga"}
// ]
// const final = person.map((value)=>{
//     return [value.firstName, value.lastName].join(" ")
// })
// console.log(final)

//72
// const person = [
//     {id : 1 , firstName: "abishek", lastName : "pandian"},
//     {id : 2 , firstName: "arun", lastName : "pandian"},
//     {id : 3 , firstName: "bala", lastName : "muruga"}
// ]
// const final = person.map((value)=>{
//     let fullName = [value.firstName, value.lastName].join(" ");
//     let obj = { id : value.id, fullName}
//     return obj;
// })
// console.log(final)

// //recall array methods
// .sort
// .every
// .some
// .filter
// .map 

// 73 chaining method
// let products = [
//     {id : 1, title : "Android phone", price : 7500},
//     {id : 2, title : "i phone", price : 75000},
//     {id : 3, title : "head phone", price : 1000}
// ]
// //sort by title
// // let result = products.sort((a,b)=> {

// //     if (a.title < b.title) return -1
// //     if (a.title > b.title) return 1
// //     return 0
// // })
// //sort by price
// // let result = products.sort((a,b)=> {
// //       return a.price - b.price
// //     // if (a.price < b.price) return -1
// //     // if (a.price > b.price) return 1
// //     // return 0
// // })

// //filter product less than 8000
// // let result = products.filter((value) => {
// //     return value.price < 8000
// // })

// //map it ( price we add $symbol)
// let result = products.map((value) => {
//      return  value.id +".  " + value.title + "- ₹" + value.price
// })


// console.log(result)

//74th reduce method (find whole array values like total marks)
//primitive
// let marks = [72,98,66,88,74];
// let total = marks.reduce((value1,value2)=>{
//     return value1 + value2 

// })
// console.log(total)

//76
// reference
// let person = [
//     {id : 2, name : "abis", mark: 98},
//     {id : 1, name : "abi", mark: 92},
//     {id : 1, name : "abi", mark: 99},
//     {id : 1, name : "abi", mark: 96},
//     {id : 1, name : "abi", mark: 93},
// ]
// // use reduce
// // let total = person.reduce((value1,value2) => {
// //     return value1 + value2.mark 
// // },0)
// // console.log(total)

// // //use reduceRight other add from right side 
// // let total = person.reduceRight((value1,value2) => {
// //     console.log(value1)
// //     return value1 + value2.mark 
// // },0)

// // another
// // function addCost(value1,value2)  {
// //     return value1 + value2.mark 
// // }
// //new 
// const addCost = (value1,value2) => value1 + value2.mark

// let total = person.reduce(addCost,0)
// console.log(total)

//77th assignment 
// let cart = [
//     {price: 2300, id: 224, quantity : 2},
//     {price: 1300, id: 2364, quantity : 1},
//     {price: 1800, id: 224, quantity : 5},
//     {price: 500, id: 2324, quantity : 3},
// ]

// // let total = cart.reduce((value1,value2) => {
// //     console.log(value1)
// //     return value1 + value2.id
// // },0)
// let subtotal = (value1,value2) =>  value1 + value2.price
    
// let total = cart.reduce(subtotal , 0)
// console.log(total)

//78th
// //assignment  for sort , find , filter , reduce , map
// let number = [43,4,3,51,32,87]


// //use sort (ascii - American standard code informtion interchange(Ascii table) )
// // let result = number.sort()

// //use find
// // let result = number.find((value) => value>50)

// //use filter
// // let result = number.filter((value) => value>50)

// //use reduce
// // let result = number.reduce((value1,value2) => {
// //  //console.log(value1)
// //   return  value1 + value2
// // },0)

// //use map
// let result = number.map((value) => {
//    // console.log(value1)
//      return "₹" + value
//    })

// console.log(result)

//79th Function 
// let a = 445;
// let b = 24253;

// let result = a + b 

// console.log(result)

//2nd
// function sum(a,b) {
//     return  a + b; 
// } 

// let result = sum(2324,314)
// console.log(result)

//80th 
// //function declaration
// function addNew() {
//     console.log("dffevsadc")
// }
// addNew()
// //function expression
// let sum = function() {
//     console.log("aaadffevsadc")
// }
// sum()

//81 calculator app
// let tiffen = 50;
// let lunch = 80;
// let petrol =102;

// function sumExpense() {
//     let result = tiffen + lunch + petrol;
//     console.log("total : " + result)

// }
// sumExpense()

//2nd method
// function sumExpense(tiffen,lunch,petrol) {
//     return tiffen + lunch + petrol;  
// }
// let result = sumExpense(24,532,32)
// console.log("total : " + result)

//82 function argument
// function sumExpense() {
//     let total = 0 
//     for (let value of arguments) {
//         total += value
//     }
//     return total
      
// }
// let result = sumExpense(2,5,2,1,13,13,1,1)
// console.log("total : " + result)

//83 assignment add all values

// function addValue() {
//     let total = 0;
//     for (let value of arguments) {
//          total += value
//         // console.log(total)
//     }
//     return total

// }
// let result = addValue(3,2,3,4,5,6,6)
// console.log(result)

//84  rest operator

// function addNum(loan, ...expense) {
//     let total = expense.reduce((a,b) => a + b )
//     return total -loan
// }
// let result = addNum(3,20,3,4,55,6,6,7,4,2,);
// console.log(result)

//85 function laa default parameter

// function totalBill(cost,tax) {
//     taxAmount = cost * (tax/100)
//    // console.log(taxAmount)
//     let totalBill = cost + taxAmount
//     console.log(`
//     cost       : ${cost} 
//     tax amount : ${taxAmount} 
//     -----------------------------
//     total      : ${totalBill}`)
// }
// totalBill(1000, 12)

//86 normal code 
// let name = {
//     firstName : "abishek",
//     secondName : "pandian",
//     fullName() { 
//         return `${name.firstName} ${name.secondName}`
//     },
// }
// console.log(name.fullName())

//86.a ( in es6 we use get and set method now we see)

// let name = {
//     firstName : "dkmfkmf",
//     secondName : "rwkrkmf",
//     get fullName() {
//         return `${name.firstName} ${name.secondName}`
//     },
//     set fullName(value) {
//         let values = value.split(" ");
//         this.firstName = values[0];
//         this.secondName = values[1] ?? "";
//     }
// } 
// name.fullName = "mdkmwtrf"

// console.log(name.fullName)

//86.b use try & catch method and passing error
// let name = {
//     firstName : "dkmfkmf",
//     secondName : "rwkrkmf",
//     get fullName() {
//         return `${name.firstName} ${name.secondName}`
//     },
//     set fullName(value) {
//         if(typeof value != "string") {
//             const err = new Error("i/p not a string");
//             throw err
//           //  console.log(err)
//         }
//         if(value.length <= 3 ) throw "name invalid"
//         let values = value.split(" ");
//         this.firstName = values[0];
//         this.secondName = values[1] ?? "";
//     }
// } 

// try {
//     name.fullName = "gf"
// }
// catch (e) {
//     alert(e)
// }
// console.log(name.fullName)



//87 assignnment

// let products = {
//     product1 : "Tv",
//     product2 : "shampoo",
//     get total() {
//         return `${this.product1} ${this.product2}`
//     },
//     set total(value) {
//         if(typeof value != "string") {
//             const err = new Error("not a string")
//             throw err
//             //console.log(err)
//         }
//         if(value.length <=3) throw ("name invaild")
//        let values = value.split(",")
//        this.product1 = values[0];
//        this.product2 = values[1] ?? "mattum thaan";
//     }
// }
// // products.total = "lays,pepsi"
//  try {
//     products.total = "lays"
//  }
//  catch(ess){
//     alert(ess)
//  }
// console.log(products.total)

//88.assignment 2 
// let movieList = {
//     movie1 : "singam",
//     movie2 : "varisu",
//     movie3 : "ayalaan",
//     get total()  { return `${this.movie1} ${this.movie2} ${this.movie3}`},
//     set total(value)  {
//         if(typeof value != "string")  {
//             const err = new Error("not a string")
//             throw err
//            // console.log(err)
//         }
//         if(value.length < 3 ) throw "name invalid"
//         let values = value.split(",") 
//         this.movie1 = values[0],
//         this.movie2 = values[1] ?? ""
//         this.movie3 = values[2] ?? ""
//     }
// }


// try {
// movieList.total = "k,g,f"
// }
// catch(ss) {
//    alert(ss)
// }


// console.log(movieList.total)


//89.assign 3
// let name = {
//     firstName : "kfrs",
//     secondName: "fsd",
//     get fullName() {return `${this.firstName} ${this.secondName}`},
//     set fullName(value) {
//         if(typeof value != "string") {
//             const err = new Error("name invalid")
//             throw err
//         }
//         if(value.length < 3)  throw "less char"
//         let values = value.split(" ")
//         this.firstName = values[0];
//         this.secondName = values[1] ?? ""
//     }
// }
// try {
//     name.fullName = "hgf"
// }
// catch(ess) {
//     alert(ess)
// }
// console.log(name.fullName)

//90. Var vs Let ( var : result collected by whole window, Let : only inside our object )
// var color = "red";
// let colors = "blue"
// //check in the terminalor console window.color


//91.