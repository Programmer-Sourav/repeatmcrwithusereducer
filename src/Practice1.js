//Assignment1 Repeat
export default function Practice1(){
// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

const getOddNumbers = () =>{
    const numbers = [15, 12, 10, 9, 7, 4, 3, 5] 

    const result = numbers.filter((number)=>number%2!==0)
    return result;
}

//Write an ES6 function which takes an array of digits and return the sum of all digits present at odd indices. Avoid using in-built methods.
const sumOfDigits = () =>{
   const numbers = [15, 12, 10, 9, 7, 4, 3, 5] 
   let sum = 0;

   for(let i = 0 ; i<numbers.length; i++){
     if(i%2!==0)
     sum = sum + numbers[i]
   }
   return sum
}

//Write an ES6 function to reverse a string in JavaScript without using in-built methods.

const reverseString = () =>{
    const strVal = "ABCDEF"
    let result = "";
    for(let i = strVal.length-1; i>=0; i-- ){
        result = result + strVal[i]
        
    }
    return result
}

const reverseStringWithInbuilt = () =>{
    const strVal = "ABCDEF"
    let result = strVal.split('').reverse().join('')
    return result
}

//Write an ES6 function that takes an array of strings and returns the shortest string in the array.
const getShortestString = () =>{
    const stringArray = ["Hello", "World", "Its", "Me"]

    // const result = stringArray.reduce((acc, cur)=>(cur.length<acc.length ? [...acc, cur] : [cur]))
    // return result //returns array

    const result = stringArray.reduce((acc, cur)=>(cur.length<acc.length ? cur : acc), stringArray[0])
    return result
}

// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.
const getSumOfArrays = (inputArray1, inputArray2) =>{
   const sum = []

   for(let i = 0; i<inputArray1.length && inputArray2.length ; i++){
    sum[i] = inputArray1[i]+ inputArray2[i]
    
   }
   return sum
}

//6. Write an ES6 function that takes an object with x and y properties and returns an array containing the values of x and y.

const getArrayFromObject = ({x, y}) => [x,y]  //Forgot

const getDetailsByDestructuring = (carDetails) =>{
  const { make, model, year} = carDetails
  
  return `Make: ${make} - Model: ${model} - Year: ${year}`
}

// 8. Write an ES6 function that takes an object with title and author properties and returns a string in the format "{title} by {author}". Do this with least amount of characters.

const getDetailsByLeastchar = (bookDetails) =>{
  return `${bookDetails.book} by ${bookDetails.author}` 
}
const areStringsEqual = (string1, string2) => string1.toLowerCase() === string2.toLowerCase();

//// 10. Write an ES6 function that takes an array of objects, each with name and age properties, and returns an array containing the names of all people whose age is greater than or equal to 60. Avoid using in-built methods.

let  newArray = []
// const getSeniorCitizens = (people) =>{
//    for(let i = 0; i<people.length; i++){
//         if(people[i].age>=60)
//         newArray = [...newArray, people[i].name]
//    }
//    return newArray
// }
//or using 2 loops
const getSeniorCitizens = (people) => {
    let newArray= [];
  
    for (let i = 0, j = 0; i < people.length; i++) {
      if (people[i].age >= 60) {
        newArray[j] = people[i].name;
        j++;
      }
    }
  
    return newArray;
  };
return(
    <div>
       
       {console.log(getOddNumbers())}
       {console.log(sumOfDigits())}
       {console.log(reverseString())}
       {console.log(reverseStringWithInbuilt())}
       {console.log(getShortestString())}
       {console.log(getSumOfArrays([1,2,3,4,5,6],[7,8,9,10,11,12]))}
       {console.log(getArrayFromObject({x:10, y:15}))}
       {console.log(getDetailsByDestructuring({make: "Maruti", model: "Alto", year: "1990" }))}
       {console.log(getDetailsByLeastchar({book: "Energize your mind", author: "Gaur Gopal Das"}))}
       {console.log(areStringsEqual("Apple", "apple"))}
       
       {console.log(getSeniorCitizens([
  { name: "Alice", age: 69 },
  { name: "Bob", age: 47 },
  { name: "Charlie", age: 70 }
]))}
    </div>
)
}