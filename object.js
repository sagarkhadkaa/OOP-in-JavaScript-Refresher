//The Simplest way to create an boject is using an "object literal"
// const circle = {
//     radius: 1,
//     draw() {
//         console.log("Circle");
//     },
// };

//To create multiple objects with the same structure and behaviour(methods), use a "factory" or a "constructor".

//Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log("Draw");
//         },
//     };
// }
// const circle = createCircle(2);

// //Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {};
// }

// const smallCircle = new Circle(3);

//Value vs Reference Types

//Primitives are copied by their value
///They are======>Number,String,Boolean,Symbol,undefined,null

//Objects are copied by their reference
///They are ======>Object,Function,Array

//Example 1 (Copied by value)
//(x and y are completely independent variable and the value is copied only.)
// let x = 10;
// let y = x;

// x = 20;
// console.log(y);

//Example 2 (copied By Reference)
// let x = { value: 10 };
// let y = x;

// x.value = 20;
// console.log(y);

//Adding and Removing Properties
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

// const circle = new Circle(10);

// circle.position = { x: 1 };
// // circle['location']={x:1}   //Same as above
// const propertyName = "center location";
// circle[propertyName] = { y: "pulchowk" };

// //you can delete the certain properties of the object
// delete circle.position;

// console.log(circle);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }
// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ("radius" in circle) console.log("Circle has a radius");

//Private Properties and Methods
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 };
//     let computeOptimumLocation = function (factory) {};
//     this.draw = function () {
//         computeOptimumLocation(0.1);
//         console.log("Draw");
//     };
// }

// const circle = new Circle(10);
// circle.draw();

//Stopwatch Implementation
function Stopwatch() {
    let startTime,
        endTime,
        running,
        duration = 0;

    this.start = function () {
        if (running) throw new Error("Stopwatch has already started");
        running = true;
        startTime = new Date();
    };
    this.stop = function () {
        if (!running) throw new Error("Stopwatch is not started.");
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
    });
}
