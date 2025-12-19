console.log("Hello, World!");

/* 
A class is a blueprint (plan) for creating objects.
Objects are created from the class later.
*/

/* 
CLASS vs OBJECT

Class = blueprint (not real)
Object = thing created from the class (real)

One class → many objects
*/


/* This class describes what a Car is */


/* 
We are defining a class called Car.
A class is a blueprint (plan), not a real object.
*/

/* 
class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
}
*/


class Car {

    /* 
    The constructor is a special function.
    It runs automatically when a new Car object is created.
    */
    constructor(make, model, color) {

        /* 
        "this" means: the current Car object being created right now.
        We are saving the provided "make" value onto THIS car.
        */
        this.make = make;

        /* 
        We are saving the provided "model" value onto THIS car.
        Each car will have its own model.
        */
        this.model = model;

        /* 
        We are saving the provided "color" value onto THIS car.
        Each car can have a different color.
        */
        this.color = color;
    }
}

/* 
Create a new Car object using the Car class.
The constructor runs automatically.
*/
const car1 = new Car('Toyota', 'Corolla', 'Black');

/* 
Create another Car object.
This is a DIFFERENT car with its own data.
*/
const car2 = new Car('Honda', 'Civic', 'Red');

console.log(car1);
console.log(car2);