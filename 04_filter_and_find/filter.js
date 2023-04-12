let users = [
    { firstName: "Susan", age: 14 },
    { firstName: "Daniel", age: 16 },
    { firstName: "Bruno", age: 56 },
    { firstName: "Jacob", age: 15 },
    { firstName: "Frank", age: 30 },
    { firstName: "Sam", age: 64 },
    { firstName: "Dave", age: 56 },
    { firstName: "Neils", age: 65 }
];

// for young people
const youngPeople = users.filter((person) => {
    return person.age <= 18;
});

//for senior people
const seniorPeople = users.filter((person) => person.age >= 50);

console.log("Senior People : ", seniorPeople);
console.log("Young People : ", youngPeople);

const Bruno = users.find((person) => person.firstName === "Bruno");
console.log(Bruno);