// Object Literal Form (Procedural form)
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// }


// Factory Function Form
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
// circle.draw();


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);



// Adding properties
circle.location = {x: 1};
// OR
circle['location'] = {x: 1};

// Deleting properties
delete circle.location;
delete circle['location'];



// Enumerating properties
for (let key in circle) {
    console.log(key, circle[key]);
}

// Getting all keys within an object
const keys = Object.keys(circle);


// Checking for existence of a property/method within an object
if ('radius' in circle)
console.log('Circle has a radius');




// Practice Example
function Stopwatch() {
    let startTime, endTime, running, duration = 0

    this.start = function() {
        if (running)
        throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
        throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration}
    });

}