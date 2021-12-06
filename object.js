//The Simplest way to create an boject is using an "object literal"
// const circle = {
//     radius: 1,
//     draw() {
//         console.log("Circle");
//     },
// };

//To create multiple objects with the same structure and behaviour(methods), use a "factory" or a "constructor".

//Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("Draw");
        },
    };
}
const circle = createCircle(2);

//Constructor function
function Circle(radius) {
    console.log("this", this);
    this.radius = radius;
    this.draw = function () {};
}

const smallCircle = new Circle(3);

//Value vs Reference Types

//Primitives are copied by their value
///Example======>Number,String,Boolean,Symbol,undefined,null
//Objects are copied by their reference
///Example======>Object,Function,Array
