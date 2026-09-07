const car = {
    Make: "toyoto",
    Model: "lancruiser",
    year: 2006,
    start: function () {
        console.log(this.Model + " has started");
    }
};
// console.log("make: " + car.Make);
// console.log("model: " + car.Model);
// console.log("year: " + car.year);
car.start();