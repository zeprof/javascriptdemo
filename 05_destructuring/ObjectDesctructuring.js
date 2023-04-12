const Susan = {
    firstName: "Susan",
    lastName: "Steward",
    age: 14,
    hobbies: {
        hobby1: "singing",
        hobby2: "dancing"
    }
};

var firstName = Susan.firstName;
var age = Susan.age;
var hobby1 = Susan.hobbies.hobby1;

console.log(firstName, age, hobby1); //"Susan" 14 "singing"

// Object destructuring
var {firstName, age, hobbies:{hobby1}} = Susan;

console.log(firstName, age, hobby1); //"Susan" 14 "singing"

// var vs let vs const ?


// fonctionne aussi avec des fonctions
function individualData({firstName, age, hobbies:{hobby1}}){
    console.log(firstName, age, hobby1); //"Susan" 14 "singing"
}
individualData(Susan);