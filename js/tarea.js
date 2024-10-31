//tarea juan
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "karla"
let lastName = "garcia"
let country = "mexico"
let age = "age"
let city = "pdc"
let isMarried = "no" //false
let year = "2024"

console.log (typeof firstName);
console.log (typeof lastName);
console.log (typeof country);
console.log (typeof city);
console.log (typeof age);
console.log (typeof isMarried);
console.log (typeof year);

//Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10);

//Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10);


//Write three JavaScript statement which provide truthy value

console.log ("20" > "10");
console.log (10 == 10);
console.log ("karla" < "ivan");


//Write three JavaScript statement which provide falsy value.

console.log ("10" > "30");
console.log ("karla" > "ivan");
console.log (20 === 20);


//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 true
// 4 >= 3 true
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' false
// 4 == '4’ true
// 4 === '4’ false

console.log(4 > 3);     
console.log(4 >= 3);    
console.log(4 < 3);     
console.log(4 <= 3);   
console.log(4 == 4);    
console.log(4 === 4);   
console.log(4 != 4);    
console.log(4 !== 4);   
console.log(4 != '4');   
console.log(4 == '4');   
console.log(4 === '4');

// What is the year today?
console.log("Year:", today.getFullYear());

 
 //What is the month today as a number?
 cconsole.log("Month:", today.getMonth() + 1);

 //What is the date today?
 console.log("Date:", today.getDate());

 //What is the day today as a number?
 console.log("Day of the Week:", today.getDay());

 //What is the hours now?
 console.log("Hour:", today.getHours());

 //What is the minutes now?
 console.log("Minutes:", today.getMinutes());



//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//Enter base: 20
 //Enter height: 10
 //The area of the triangle is 100
 let b = prompt('base value');
let h = prompt('height value');
let (0.5 * b * h);

 //Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate
 //the perimeter of triangle (perimeter = a + b + c)
 //Enter side a: 5
 //Enter side b: 4
 //Enter side c: 3
 //The perimeter of the triangle is 12 

 let a1 = parseInt(prompt('side a 5'));
let b1 = parseInt(prompt('side b 4'));
let c1 = parseInt(prompt('side c 3'));
let perimetro = a1 + b1 + c1;
console.log(perimeter);



