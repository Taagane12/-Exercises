const colors = ["yellow", "green", "red"];
console.log("before adding black: " + colors);
colors.push("black");
console.log("after adding: " + colors);
colors.shift();
console.log("after deleting first array:" + colors);