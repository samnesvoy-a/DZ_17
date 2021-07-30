let vegetable = [
    { name: "onions", color: "white", shape:"round"}
]

let { name, color } = vegetable[0];

console.log(`${name} 's are usually' ${color}` );

let {name, shape} = vegetable[0];

console.log(`${name} 's are usually' ${shape}`);


let vegetables = [
    { name: "onions", color: "white", shape:"round"},
    { name: "cucumber", color: "green", shape:"test"},
    { name: "tomato", color: "red", shape: "test2"}
]
let [cucumber, tomato] = vegetables;

console.log(`${cucumber.name} 's are usually' ${cucumber.color}`);


const [firstVegetable, ...otherVegetables] = vegetables;
console.log(firstVegetable.name === cucumber.name);

let students = [
    { name: 'Kate', age: 25 },
    { name: 'Artur', age: 30 },
    { name: 'Nick', age: 15 },
    { name: 'Alex', age: 28 },
    { name: 'Zhenia', age: 45 },
];

const [, secondStudent, ...otherStudent] = students;
console.log(otherStudent.length);
console.log(secondStudent);