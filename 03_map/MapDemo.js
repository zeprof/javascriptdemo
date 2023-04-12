let users = [
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
    { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
];

let singleUser = users.map((user)=>{
    //let's add the firstname and lastname together
    let fullName = user.firstName + ' ' + user.lastName;
    return `
    <h3 class='name'>${fullName}</h3>
    <p class="age">${user.age}</p>
  `
});

console.log(singleUser);