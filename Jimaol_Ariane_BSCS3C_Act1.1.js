//VARIABLES
let name ="Ariane";
let age =24;
let grade =90;

//CONDITIONALS
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

if (grade >= 90) {
    console.log("Excellent Grade!");
} else if (age >= 13) {
    console.log("You Passed!");
} else {
    console.log("You Failed.");
}

if (grade >= 95) {
    console.log("Outstanding Performance!");
} else if (grade >= 80) {
    console.log("Good Performance!");
} else {
    console.log("You need to omprove.");
}

//LOOP
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}

let number = 1;

while (number <= 5) {
    console.log("While Loop:", number);
    number++;
}

let count = 1;

do {
    console.log("Do-while loop:", count);
    count++;
} while (count <= 5);

//ARRAYS
let fruits = ["Apple", "Banana", "Mango"];
    console.log("Fruits:", fruits);
let subjects = ["Math", "English", "Science"];
    console.log("Subjects:", subjects);
let scores = [90, 85, 95];
    console.log("Scores:", scores);

//OUTPUT
console.log("===== STUDENT INFORMATION =====");
console.log("Name:", name);
console.log("Age:", age);
console.log("Grade:", grade);