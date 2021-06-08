// // DESTRUCTURING  (creating variables out of array values)
// // const arr = [1, 2, 3]
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]
// // console.log(a,b,c)

// // // Now with destructuring
// // const [x, y, z] = arr
// // console.log(x, y, z)

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient)
        console.log(otherIngredients)
    }
  };


//   const [first, second] = restaurant.categories
//   const [, , third] = restaurant.categories
//   console.log(restaurant.categories[2])  //same as above
//   console.log(first, second)
//   console.log(third)

// //   Switching values around in an array
//   let [main, secondary] = restaurant.mainMenu
//   ;[main, secondary] = [secondary, main]
//   console.log(main, secondary)  // Switches to: Pasta, Pizza...
 

// //   Receive 2 return values from a function
// console.log(restaurant.order(2, 0))  // Garlic bread and pizza
// // destructure
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)


// // Destructuring with a nested array
// const nested = [2, 3, 4, [5, 6]];
// const [i, , , j] = nested
// console.log(i, j)  // returns 2 [5, 6]

// // Destructuring a nested array
// const [q, , , [v, k]] = nested
// console.log(q, v, k)  //returns 2 5 6


// // Default Values
// const [p=1, o=1, r=1] = [5, 6]
// console.log(p, o, r)  //returns 6 5 1 (even though original array has only 2 values)




// // DESTRUCTURING OBJECTS

// // const restaurant = {
// //     name: 'Classico Italiano',
// //     location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //     order: function(starterIndex, mainIndex) {
// //         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
// //     },
  
// //     openingHours: {
// //       thu: {
// //         open: 12,
// //         close: 22,
// //       },
// //       fri: {
// //         open: 11,
// //         close: 23,
// //       },
// //       sat: {
// //         open: 0, // Open 24 hours
// //         close: 24,
// //       },
// //     },
// //   };

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories)

// // renaming the variables
// const { name: restaurantName, openingHours: hours, mainMenu: entrees } = restaurant
// console.log(entrees)

// //   Switching values around in an object
// // let a = 111;
// // let b = 999;
// const obj = { a:23, b:7, c:14 }
// ;({ a, b } = obj)
// console.log(a, b)


// // Default Values (Object)
// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters)


// // Nested Objects
// const { fri } = openingHours
// console.log(fri)  //returns {open: 11, close: 23}

// const { sat: { open, close } } = restaurant.openingHours
// console.log(close)  //Returns 24





// SPREAD OPERATOR  (used to build new arrays, or pass multiple values into functions)
const randomArr = [7, 8, 9]
console.log(randomArr)

const newArr = [1, 2, 3, 4, 5, 6, ...randomArr]
console.log(newArr)  //Logs newArr as an actual array in the console
console.log(...newArr)  //logs newArr as individual values in the console

// Combining Arrays
const anotherArr = ['a', 'b', 'c']
const combinedArr = [...anotherArr, ...randomArr]
console.log(combinedArr)


// Adding to restaurant Menu
const newMenu = [...restaurant.mainMenu, 'Gnocci']
// restaurant.mainMenu.push('Gnocci')
console.log(newMenu)


// Copy arrays (shallow copy)
const mainMenuCopy = [...newMenu]
console.log(mainMenuCopy)



// Spread Operator works on Iterables. Iterables include *arrays, strings, sets, maps. NOT Objects*

// Spread operator on strings
const str = 'Rabie'
const letters = [...str, '', 'N. ']
console.log(letters)


// Working with restaurant object
// const ingredients = [
//     prompt('Let\'s make pasta! Ingredient 1?'),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3')
// ]

// console.log(ingredients)

// restaurant.orderPasta(...ingredients)


// Spread operator with Objects
const newRestaurant = { foundedIn: 1998, founder: 'Ciro', ...restaurant }
console.log(newRestaurant)


// Creating shallow copy of object
const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'Roma\'s Finest';
restaurantCopy.openingHours.thu.open = 8
console.log(restaurantCopy)





// REST PATTERN AND PARAMETERS  (does the opposite of spread operator)

// (1) DESTRUCTURING USING REST

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]   //(destructuring)
console.log(a, b, others)   //returns: 1 2 [3, 4, 5]


// Using both Rest and Spread together  
const [, bruschetta, garlicBread, , pizza, ...otherFood] = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(garlicBread, otherFood)  //Returns: Garlic Bread ["pasta", "risotto"]
// REST does NOT include skipped elements, so in this example, 'Focaccia' and 'Caprese Salad' are gone
// REST must ALWAYS be last in destructuring, because it is capturing the 'rest' of the array



// Objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(weekdays)


// (2) FUNCTIONS USING REST

const add = function (...numbers) {
    console.log(numbers.reduce((total, num) => total + num, 0) * 2)
}
add(2, 3)  //returns 10
add(4, 7, 8, 5)  //returns 48


const x = [1, 2, 3]
add(...x)  //returns 12


// Restaurant object example
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach')  //returns: mushrooms ['onions', 'olives', 'spinach']