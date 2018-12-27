


var firstName = 'Terreance';
console.log(firstName);

const stateNum = 50;

var x = 5;
var y = 4;
var z = x + y;
// console.log(z)
// x and y are examples of me adding to variables together

function sayHello () {
    alert('Hello World!');
}

sayHello();

function checkAge (name, age) {
    if (age < 21){
    alert("Sorry " +  name  + " ,your not old enough")
    }
};

checkAge('Thomas', 20);
checkAge('Tamay', 36);
checkAge('Fanny', 18);
checkAge('Granny', 1);


let favVeg = ["Corn", "Spinach", "Celery", "Broccoli", "Carrot"];

for (let i = 0; i < favVeg.length; i++){
    console.log(favVeg[i]);
}

let peopleArray = [
 {
 name: 'John',
 age: 17
},
{
    name: 'Owen',
    age: 4
   },
   {

    name: 'Doug',
    age: 8
   },
   {
    name: 'Phernando',
    age: 21
   },
   {
    name: 'Tom',
    age: 12
   }
]

for (let i = 0; i < peopleArray.length; i++){
    checkAge(peopleArray[i].name, peopleArray[i].age);
};

function getLength(text) {
    let charactersTotal = 0;
    for (let i = 0; i < text.length; i++) {
            charactersTotal++;
    }
    return charactersTotal;
}

let keyTotal = getLength("Hello World");

console.log("Total number of characters: " + keyTotal);

if (getLength % 2 === 0){
 console.log("Its a nice evening sir!");   
} else {
    console.log("It's kinda odd today")
}