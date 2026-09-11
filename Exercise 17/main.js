// 1. Write an `else if` statement that logs:
//     - "Very cold" if the temperature is below 0,
//     - "Cold" if the temperature is between 0 and 15,
//     - "Warm" if the temperature is between 15 and 25,
//     - "Hot" if the temperature is above 25.


let temperature = -0.3;
let min = 0.01;
let max = 0;
if (temperature < 0) {
    console.log("Very cold")
} else if (temperature > 0 && temperature <= 15) {
    console.log("cold")
} else if (temperature > 15 && temperature <= 25) {
    console.log("warm")
} else if (temperature > 25) {
    console.log("Hot")
};