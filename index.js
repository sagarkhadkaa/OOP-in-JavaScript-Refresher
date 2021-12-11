// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

// const circle = new Circle(10);

//Property Descriptor
// let person = { name: "Sagardz" };
// // let objectBase = Object.getPrototypeOf(person);
// // let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// // console.log(descriptor);
// Object.defineProperty(person, "name", {
//     writable: false,
// });
// person.name = "Josh";
// console.log(person);

//Creating your own Prototypical Inheritance
// function Shape() {}

// Shape.prototype.duplicate = function () {
//     console.log("duplicate");
// };

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.draw = function () {
//     console.log("draw");
// Circle.prototype = Object.create(Shape.prototype);
// };

// const s = new Shape();
// const c = new Circle(1);

//Resetting the Constructor
// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.duplicate = function () {
//     console.log("duplicate");
// };

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
// }

// Circle.prototype.draw = function () {
//     console.log("draw");
// };
// extend(Circle, Shape);

// function Square(size) {
//     this.size = size;
// }

// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(1, "red");
// const sh = new Square(5);

//Composition and Mixins
// function mixin(target, ...sources) {
//     Object.assign(target, ...sources);
// } //rest operator, =>array
// const canEat = {
//     eat: function () {
//         this.hunger--;
//         console.log("eating");
//     },
// };

// const canWalk = {
//     walk: function () {
//         console.log("walking");
//     },
// };
// const canSwim = {
//     swim: function () {
//         console.log("swimming");
//     },
// };
// function Person() {}
// function Goldfish() {}

// mixin(Person.prototype, canEat, canWalk);
// mixin(Goldfish.prototype, canEat, canSwim);

// const person = new Person();
// const goldfish = new Goldfish();

// console.log(goldfish);

//Prototypical Inheritance problem
// function HtmlElement() {
//     this.click = function () {
//         console.log("clicked");
//     };
// }

// HtmlElement.prototype.focus = function () {
//     console.log("focused");
// };

// function HtmlSelectElement(items = []) {
//     this.items = items;
//     this.addItem = function (item) {
//         this.items.push(item);
//     };
//     this.removeItem = function (item) {
//         this.items.splice(this.items.indexOf(item), 1);
//     };
// }

// HtmlSelectElement.prototype = new HtmlElement();

//Polymorphism Problem/Solution

//Stack Implementation
const _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this, []);
    }
    push(obj) {
        _items.get(this).push(obj);
    }
    pop() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Stack is empty");
        return items.pop();
    }
    peek() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Stack is empty");
        return items[items.length - 1];
    }
    get count() {
        return _items.get(this).length;
    }
}
