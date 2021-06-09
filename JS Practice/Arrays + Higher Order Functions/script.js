const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  

  const letters = ['a', 'b', 'c', 'd', 'e']



//   PUSH, POP, SHIFT, UNSHIFT
// letters.push('f')  //['a','b','c','d','e','f']
// letters.pop()  //['a','b','c','d',]
// letters.unshift(1)  //[1,'a','b','c','d','e']
// letters.shift()  //['b','c','d','e']
// console.log(letters)



//   SLICE
//   console.log(letters.slice(2))  //Returns ['c', 'd', 'e']
//   console.log(letters.slice(2, 4))  //Returns ['c', 'd']
//   console.log(letters.slice(-2))  //Returns ['d', 'e']


//   SPLICE
//   console.log(letters.splice(2))  // Removes first 2 letters in letters array
//   console.log(letters.splice(2, 4))
//   console.log(letters.splice(-1)) // Removes last letter in letters array
//   console.log(letters)



// REVERSE
// console.log(letters.reverse())  //Mutates original array
// console.log(ages.reverse())
// console.log(letters)



// CONCAT (Combines arrays)
// const letters_2 = ['f', 'g', 'h', 'i', 'j']
// console.log(letters.concat(letters_2))



// INDEXOF
// const arr = [1, 2, 3, 4, 5]
// arr.indexOf(3) //returns 2



// INCLUDES (checks if array contains item and returns boolean)
// const arr = [1, 2, 3, 4, 5]
// arr.includes(2)  //returns true



// SOME (checks if array contains *any instance* and returns boolean)
// const numberArr = [2, 15, 45, -19, 87, -93]
// const someNum = numberArr.some(num => num < 0) //Does numberArr contain ANY values less than 0? *true*
// console.log(someNum)



// EVERY (checks if array contains *every instance* and returns boolean)
// const numberArr = [2, 15, 45, -19, 87, -93]
// const someNum = numberArr.every(num => num < 0) //Does numberArr contain ALL values less than 0? *false*
// console.log(someNum)



// JOIN
// console.log(letters.join(' - '))



// FIND (returns first instance in array that meets defined criteria) SIMILAR TO FILTER BUT DOES NOT RETURN NEW ARRAY
// const numberArr = [2, 15, 45, -19, 87, -93]
// const firstNegNumber = numberArr.find(num => num < 0)
// console.log(firstNegNumber)  // returns -19
// const company = companies.find(comp => comp.name === 'Company Six')
// console.log(company)



// FIND INDEX
// const startDate = companies.findIndex(comp => comp.start === 1989)
// console.log(startDate)



// //   FOR LOOP
//   for(let i = 0; i < companies.length; i++) {
//       console.log(companies[i])
//   }



//   For Each
//   companies.forEach((company) => {
//     console.log(company.name)
//   })

//   companies.forEach((company, index) => {
//       if(company.start >= 2000) {
//           console.log(`Company ${index + 1}: ${company.name} is a new company`)
//       } else {
//           console.log(`Company ${index + 1}: ${company.name} is an old company`)
//       }
//   })



// //   Filter
// //   GET 21 AND OLDER
//   const canDrink = ages.filter((age) => {
//     if(age >= 21) {
//         return true
//     }
//   })

// //   Shorter version
// //   const canDrink = ages.filter(age => age >= 21)

//   console.log(canDrink)

// //   GET RETAIL COMPANIES
// //   const retailCompanies = companies.filter((company) => {
// //       if(company.category === 'Retail') {
// //           return true
// //       }
// //   })

// //   Shorter version
// const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies)

// // GET COMPANIES 1980-1989 START DATE
// const eightiesCompanies = companies.filter(company => (company.start >= 1980) && (company.start <= 1989))
// console.log(eightiesCompanies)

// // FILTER COMPANIES THAT LASTED AT LEAST 10 YEARS
// const lastingCompanies = companies.filter(company => (company.end - company.start >= 10))
// console.log(lastingCompanies)



// // MAP
// // create array of comapny names
// const companyNames = companies.map(company => {
//     return company.name;
// })
// console.log(companyNames)

// // companies years in operation
// const testMap = companies.map(company => {
//     return `${company.name} [${company.start}] - [${company.end}]`
// })
// console.log(testMap)

// // take square root of each age
// const sqrtAge = ages.map(age => Math.sqrt(age))
// console.log(sqrtAge)

// // new array of company category, all capital
// const uppercaseCategory = companies.map(company => company.category.toUpperCase())
// console.log(uppercaseCategory)



// FLAT (takes nested arrays in returns one large array)
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
// console.log(arr.flat());
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// console.log(arrDeep.flat(2))


 
// FLAT MAP (combines flat() and map() into one method)
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// const test = arrDeep
// .flat(2)
// .flatMap(num => num + 2)
// .reduce((total, num) => total + num, 0)
// console.log(test)



// // SORT
// // sort companies by start year ascending
// const sortedCompanies = companies.sort((a, b) => {
//     if(a.start > b.start) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sortedCompanies)

// // sort ages descending
// const descendAge = ages.sort((a, b) => (b - a))
// console.log(descendAge)



// // REDUCE  (Boils down array into one single number/value)
// // adding ages with a regular for loop
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i]
// }

// // adding ages using reduce
// const addAges = ages.reduce((total, age) => {
//     return total + age;
// }, 0)  // The 0 represents the 'total' parameter
// console.log(addAges)

// // Get total years for all companies
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears)



// // COMBINE METHODS
// const combined = ages
// .map(age => (age + 5)/2)
// .filter(age => (age >= 10 && age <= 20))
// .sort((a, b) => a - b)
// .reduce((total, age) => total + age, 0)
                
// console.log(combined)

// const subtractCombined = () => {
//     console.log(100-combined)
// }
// subtractCombined()




// CODING CHALLENGES

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets


// HINT: Use tools from all lectures in this section so far 😉
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]

const dogsJulia2 = [9, 16, 6, 8, 3]
const dogsKate2 = [10, 5, 6, 1, 4]

const checkDogs = (dogs1, dogs2) => {
    console.log(dogs1)
    const removeCats = dogs1.slice(1, -2)
    console.log(removeCats)
    const combinedArr = [...removeCats, ...dogs2]
    // combinedArr.forEach((dog, index) => {
    //     if(dog >= 3) {
    //         console.log(`Dog ${index + 1} is an adult, and is ${dog} years old`) 
    //     } else {
    //         console.log(`Dog ${index + 1} is an puppy, and is ${dog} years old`) 
    //     }
    // })
    combinedArr.forEach((dog, index) => dog >= 3 
    ? console.log(`Dog ${index + 1} is an adult, and is ${dog} years old`) 
    : console.log(`Dog ${index + 1} is an puppy, and is ${dog} years old`))
    console.log(combinedArr)
}

checkDogs(dogsJulia, dogsKate)
checkDogs(dogsJulia2, dogsKate2)


// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

const calcAverageHumanAge = (ages) => {
    const humanAge = ages.map(dog => dog <= 2 
        ? dog = 2 * dog
        : dog = 16 + (dog * 4))
    console.log(humanAge)
    const excludeDogs = humanAge.filter(dog => dog >= 18)
    console.log(excludeDogs)
    const averageDogAge = excludeDogs.reduce((total, dog) => total + dog, 0) / excludeDogs.length
    console.log(averageDogAge)
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])



// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

const caclAverageHumanAgeChained = (ages) => {
    const humanAge = ages
    .map(dog => dog <= 2 ? dog = 2 * dog : dog = 16 + (dog * 4))
    .filter(dog => dog >= 18)
    .reduce((total, dog, i, arr) => total + dog / arr.length, 0)
    console.log(humanAge)
}

caclAverageHumanAgeChained([5, 2, 4, 1, 15, 8, 3])




// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// Step 1
dogs.forEach(dog => dog.recFoodPortion = `${(dog.weight ** 0.75) * 28}`)
console.log(dogs)

// Step 2
const sarahsDog = dogs.find(dog => dog.owners.includes("Sarah")) 
console.log(sarahsDog)
console.log(`Sarah's dog is eating too ${sarahsDog.curFood > sarahsDog.recFoodPortion ? "much" : "little"}`)

// Step 3
const ownersEatTooMuch = dogs  
.filter(dog => dog.curFood > dog.recFoodPortion)
.flatMap(dog => dog.owners)

const ownersEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recFoodPortion)
.flatMap(dog => dog.owners)

console.log(ownersEatTooMuch, ownersEatTooLittle)

// Step 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eats too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eats too little!`)

// Step 5
console.log(dogs.some(dog => dog.curFood == dog.recFoodPortion))  //returns false

// Step 6
console.log(dogs.some(dog => dog.curFood > (dog.recFoodPortion * .90) && dog.curFood < (dog.recFoodPortion * 1.10)))  //returns true

// Step 8
const sortedDogs = dogs
.slice()
.sort((a, b) => a.recFoodPortion - b.recFoodPortion)
// .map(dog => dog.recFoodPortion)
// .sort((a, b) => a - b)
console.log(sortedDogs)



const arr = [17, 21, 23]
const [a, b, c] = arr

const printForecast = (arr) => {
    // console.log(`... ${a}C in 1 day ... ${b}C in 2 days... ${c}C in 3 days...`)
    let str = ''
    arr.forEach((deg, index) => str += `${deg}C in ${index + 1} days `)
    console.log(str)
}

printForecast(arr)