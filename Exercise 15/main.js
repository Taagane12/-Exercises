// const person = { name: "Alice", age: 25, city: "Wonderland" };
// for (const key in person) {
//     console.log(key + ": " + person[key]);
// }
const people = [
    { name: "Alice", age: 21, city: "wonderland" },
    { name: "Bob", age: 31, city: "Builderland" },
    { name: "Alice", age: 35, city: "Chocolate Factory" }
];
for (const person of people) {
    for (const property in person) {
        console.log(`${property}: ${person[property]}`);
    }

    console.log("----------");
}