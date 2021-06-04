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
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const letters = ['a', 'b', 'c', 'd', 'e']



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



// JOIN
// console.log(letters.join(' - '))



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



// // REDUCE
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