// THIS KEYWORD: REGULAR FUNCTION VS ARROW FUNCTION

const rabie = {
    firstName: 'Rabie',
    year: 1991,
    calcAge: function() {
        console.log(2000 - this.year)

        // *Handling a function within a method. 2 solutions*

        // Solution 1
        // const self = this
        // const isMillenial = function() {
        //     console.log(self)  //Points to rabie object
        //     console.log(self.year >= 1981 && self.year <= 1996)  //returns 'true'
        // }
        // isMillenial()

        // Solution 2 (ES6)
        const isMillenial = () => {
            console.log(this)  //Arrow function: points to parent scope. In this case, Rabie Object. Use arrow fns in fns within methods
            console.log(self.year >= 1981 && self.year <= 1996)
        }
        isMillenial()
    },

    // greet: () => {
    //     console.log(this)
    //     console.log(`Hey ${this.firstName}!`)  //Returns 'hey undefined' because 'this' is pointing to parent scope with arrow functions
    //                                             // which in this case is the window object.
    // }

    greet: function() {
        console.log(`Hey ${this.firstName}`)   //returns 'Hey Rabie' because regular function (method) in rabie object
    }
}

rabie.calcAge()
rabie.greet()