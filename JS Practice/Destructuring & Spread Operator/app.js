// DESTRUCTURING  (creating variables out of array values)
const arr = [1, 2, 3]
const a = arr[0]
const b = arr[1]
const c = arr[2]
console.log(a,b,c)

// Now with destructuring
const [x, y, z] = arr
console.log(x, y, z)

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
  };


  const [first, second] = restaurant.categories
  const [, , third] = restaurant.categories
  console.log(restaurant.categories[2])  //same as above
  console.log(first, second)
  console.log(third)

//   Switching values around in an array
  let [main, secondary] = restaurant.mainMenu
  ;[main, secondary] = [secondary, main]
  console.log(main, secondary)  // Switches to: Pasta, Pizza...
 

//   Receive 2 return values from a function
console.log(restaurant.order(2, 0))  // Garlic bread and pizza
// destructure
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)


// Destructuring with a nested array
const nested = [2, 3, 4, [5, 6]];
const [i, , , j] = nested
console.log(i, j)  // returns 2 [5, 6]

// Destructuring a nested array
const [q, , , [v, k]] = nested
console.log(q, v, k)  //returns 2 5 6


// Default Values
const [p=1, o=1, r=1] = [5, 6]
console.log(p, o, r)  //returns 6 5 1 (even though original array has only 2 values)




// DESTRUCTURING OBJECTS

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//     },
  
//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     },
//   };

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories)

// renaming the variables
const { name: restaurantName, openingHours: hours, mainMenu: entrees } = restaurant
console.log(entrees)
