let animals = [
    {
        name:'Lion',
        category: 'carnivore'
    },
    {
        name:'dog',
        category:'pet'
    },
    {
        name:'cat',
        category:'pet'
    },
    {
        name:'wolf',
        category:'carnivore'
    }
]

var category = animals.map((animal)=>animal.category);
console.log(category); //["carnivore" , "pet" , "pet" , "carnivore"]


// With Set
//wrap your iteration in the set method like this
var category = [...new Set(animals.map((animal)=>animal.category))];

console.log(category); //["carnivore" , "pet"]