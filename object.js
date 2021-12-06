//The Simplest way to create an boject is using an "object literal"
const circle = {
    radius: 1,
    draw() {
        console.log("Circle");
    },
};

//To create multiple objects with the same structure and behaviour(methods), use a "factory" or a "constructor".

//Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {},
    };
}

//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {};
}
