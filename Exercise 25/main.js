const array = [1, 2, 3]
const array2 = [...array, 4, 5, 6];
console.log(array2);
console.log("_________");

function calculate(...numbers) {
    return numbers.reduce((sum, quantity) => sum * quantity, 1)
}
console.log(calculate(20, 5));
