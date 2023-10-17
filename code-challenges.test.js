// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("hitchHickersGuide", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy"},
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(hitchHikersGuide(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name : hitchHikerGuide
// input : array
// output : array
// process : iterate through each value and split the full name into first and last, capitalize the full name by changing the char stored in index 0 to uppercase then using slice to rejoin the rest of the string, then use string interpulation to tie it all together 

const hitchHikersGuide = (array) => { // will take an array as a parameter
    const sentences = array.map(value => { // have sentence hold the new array, use map to iterate through each value 
      const [firstName, lastName] = value.name.split(' ') // split the full name into first and last names
      const capFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1) // will hold the first name capitalized, by capitalizing the char in index 0 then slicing it with the rest of the name 
      const capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1) // will hold the last name capitalized, by capitalizing the char in index 0 then slicing it with the rest of the name 
      return `${capFirstName} ${capLastName} is ${value.occupation}.` // return the sentence using string interpulation 
    })
    return sentences // return the new senctence
  }
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe("divisableBy3", () => {
  it("that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    expect(divisableBy3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])

    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(divisableBy3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name : divisableBy3
// input : array
// output : array
// process : iterat through the array and filter out the data type "number" and place into a new array, then get the ramainders of each number divided by 3

const divisableBy3 = (array) => { // will take an array as a parameter
  const numbers = array.filter(value => typeof value === 'number') // this will iterate through the array looking for only the data type number and place them in a new array
  return numbers.map(value => value % 3) // will iterate through the array and return the remainders of each number divided by 3
}
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe("sumAndCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    expect(sumAndCubed(cubeAndSum1)).toEqual(99)
    
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumAndCubed(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.


// Pseudo code:
// name : sumAndCubed
// input : array
// output : number
// process : create a variable that will hold the total number in the end, use map to iterate through the array and calculate the number cubed and summed

const sumAndCubed = (array) => { // will take an array as a parameter
  let total = 0  // create a variable that will store the cubed and summed number
  array.map(value => total += Math.pow(value, 3)) // this calculates the cubes of all values in the array and then sums them and stores it in "total"
  return total // returns the cubed and summed numbers in total
}
