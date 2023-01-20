const car = {
    brand: "Mercedes-Benz",
    model: "A Class",
    horsepowers: 262,
    year: 2023,
    seats: 5,
    kilometres: 5000,
    fastCar: true,
    gearbox: ["Park", "Reverse", "Neutral", "Drive"],
    start: function () {
        return "Depress brake pedal and press the start/stop button together to drive " + this.brand;
    }
};

console.log(brand.start());