let fruits= ["Mango", "Pineapple" , "Orange", "Lemon", "Apple"];

const [firstFruit, secondFruit, ...rest] = fruits

console.log(firstFruit, secondFruit, rest); //"Mango" "Pineapple" ["Orange","Lemon","Apple"]


const Susan = {
    firstName: "Susan",
    lastName: "Steward",
    age: 14,
    hobbies: {
        hobby1: "singing",
        hobby2: "dancing"
    }
};

const {age, ...rest2} = Susan;
console.log(age, rest2);