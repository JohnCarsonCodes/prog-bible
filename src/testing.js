/* 
------------------------------------------------------------
*/

fetchData()
  .then(response => processResponse(response))
  .then(data => displayData(data))
  .catch(error => console.error('An error occurred:', error));

let promise1 = fetch('https://api.example.com/data1').then(res => res.json());
let promise2 = fetch('https://api.example.com/data2').then(res => res.json());

Promise.all([promise1, promise2])
  .then(results => {
    console.log('Data1:', results[0]);
    console.log('Data2:', results[1]);
  })
  .catch(error => console.error('An error occurred:', error));

async function fetchDataAndDisplay() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchDataAndDisplay();

document.addEventListener("DOMContentLoaded", function() {
    fetch('/src/navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});

//-------------------------------------------------------------

// Variable declarations
let number = 42;           // Number
const pi = 3.14159;        // Constant
var text = "Hello, world"; // String

// Function declaration
function greet(name) {
    // Template literal
    return `Hello, ${name}!`;
}

// Arrow function
const square = (x) => x * x;

// Object
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(this.name);
    }
};

// Array
const numbers = [1, 2, 3, 4, 5];

// Loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Conditional
if (number > 40) {
    console.log("The number is greater than 40");
} else {
    console.log("The number is 40 or less");
}

// Try-catch
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
}

// Regular expression
const regex = /\d+/g;
const result = text.match(regex);

console.log(greet("World"));
console.log(square(4));
person.greet();
