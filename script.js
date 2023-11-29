// console.log("Hello world");
console.log("Hello world"); // English
console.log("hej varlden"); // swedish
console.log("Ciao mundo"); // Italian
console.log("halo lokaya"); // sinhala

// console.log('I'm awesome');
//Consider the following code. console.log('I'm awesome'). Find a solution for this erro

// let x= 5;
// console.log(x);
// console.log("the value of my variable x will be number 5");

// let x=6;
// console.log(x);
// console.log("the value of my variable x will be number 6");


// var x=3;
// console.log(x);
// console.log("the value of my variable x will be number 3");

// var x=4;
// console.log(x);
// console.log("the value of my variable x will be number 4");

let y="Hello mary";
console.log(y);
// 4. Declare a variable y and assign a string to it.
// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
console.log("The value of my string will be Hello mary");



let y="Hello tim";
console.log(y);
// 4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
console.log("The value of my string will be Hello tim");

console.log("the value of my string will be assign to the y");

let z = 7.25;
//  5.2 console.log z.
console.log(z);
//  5.3 Declare another variable a that has the value of z but rounded to the nearest intege

let a = Math.round(z);
//  5.4 console.log a.

console.log(a);
// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
let highestNumber = z > a ? z : a;
//  5.6 console.log the highest value

console.log(highestNumber);

//6 Arrays.
console.log("Animals names");
let animal=null;
console.log("value of arrays will be assign to :empty arrays");
console.log("animal");

let my favorite Animal=["deer,""elephant","dog"];
console.log("my favorite Animal["deer,""elephant","dog"]");

)
let daansFavoriteAnimal = ['baby pig'];
console.log('daansFavoriteAnimal [baby pig]');

// 7 More strings.

let mystring="this is the test";
console.log(mystring);
console.log('the length of myString $[myString]');

//8 Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

let province = 'skane';
let villages = '40';
let colour = 'red';
let bigCity = 'malmo';
console.log(province,villages,colour,bigCity);
console.log("the type of  variable province will be: string");
console.log("the type of  variable province is${typeof(province)}");
console.log("the type of  variable village will be number");
console.log("the type of  variable village is:${typeof(village)}');
console.log("the type of  variable colour will be: string");
console.log("the type of  variable colour is:${typeof(colour)}');
console.log("the type of  variable bigCity will be: string");
console.log(`the type of  variable bigCity is: ${typeof(bigCity)}`);

console.log('If we compare the types of variables');
console.log("is 'province' a string?", typeof province=== "string");
console.log("is 'village' a number?", typeof village === "number");
console.log("is 'colour' a string?", typeof colour === "string");
console.log("is 'bigCity' a string?", typeof bigCity === "string");

let x1 = 7;
x1 = x1 % 3;
console.log('the new value of x1 will be: 1');
console.log('the new value is x1 ${x1}');

let q = 17;
let r = 41;
let s = 37;

q = q % 4;
r = r % 5;
s = s % 6;

console.log('the new values of q, r and s will be also 1');
console.log(`q = ${q}, r = ${r}, s = ${s}`);



//  - Write a program to answer the following questions:

console.log('task - 10');
let myArray = ['1',2, "three", 4];
console.log("myArray:", myArray);
console.log("it is 6/0 === 10/0 are equel");
console.log("If we want to compare 6/0 === 10/0 we can do that:");
(6/0 === 10/0) ? console.log('they are equel') : console.log('they are not equel');
