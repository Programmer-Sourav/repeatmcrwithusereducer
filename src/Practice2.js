// 1. Write an ES6 function that takes in an array of objects representing users and returns an array of names with all the letters capitalized.
export default function Practice2(){

  const capitalizeLeters = (arrayOfObjects) =>{
    return arrayOfObjects.map((eachObject)=>(eachObject.name.toUpperCase()))
  }


  // 2. Write an ES6 function that takes an array of objects with name, price and quantity, and returns a new array with only the names containing bread

 const filterByKeyword = (arrayToBeFiltered) =>{
   return arrayToBeFiltered.filter((eachArrayItem)=>eachArrayItem.name.toLowerCase().includes("bread"))
 }

 //// 3. Write an ES6 function that takes an array of objects with name, price and quantity, and returns the new array having only names of products who are having a quantity of more than 10 and a name of more than 5 characters in length.

const filterByLength = (values) =>{
  return values.filter((eachValue)=>(eachValue.name.length>5 && eachValue.quantity>10))
}

//// 4. Write an ES6 function that takes an array of objects with name, salary and role, and returns a new array with names whose salary is an even number.

const filterBySalary = (arr) =>{
  return arr.filter((eachItem)=>eachItem.salary%2===0)
}

//// 5. Write an ES6 function that takes in an array of numbers and returns the sum of all the even numbers. Use the nullish coalescing operator to handle undefined or null values.

// 6. Write an ES6 function that takes an array of objects with name, salary, role and workExperience, and returns a new array with an incremented salary of 1000. Also add a property isSenior as true for employees who have been working for more than 3 years.
const incrementSalaryAndPromote = (arr) =>{
 const result = arr.map((item)=>({...item, salary: item.salary+1000, isSenior: item.workExperience>2}))
// const promoted = result.map((item)=>item.workExperience>2 ? {...item, isSenior: true}: item)
 return result
}

// 7. Write an ES6 function that takes an object of two arrays of objects with name salary, role and workExperience, and returns a new array of employees having a role as QA in all teams

const getQA = (teams) =>{

}

return(
        <div>
            {console.log(capitalizeLeters([
  {
    name: "rain",
    sound: "tap tap tap"
  },
  {
    name: "fire",
    sound: "blaze"
  },
  {
    name: "water",
    sound: "slosh slosh"
  }
]))}

{console.log(filterByKeyword([
  { name: "Bread", price: 480, quantity: 3 },
  { name: "Clips", price: 300, quantity: 5 },
  { name: "green Bread Knife", price: 3077, quantity: 1 },
  { name: "Slipper", price: 150, quantity: 2 }
]))}


{console.log(filterByLength([
  { name: "Bread", price: 150, quantity: 20 },
  { name: "Hoodie", price: 200, quantity: 50 },
  { name: "Pyjama", price: 307, quantity: 10 },
  { name: "Slipper", price: 480, quantity: 30 }
]))}

{console.log(filterBySalary(
    [
        { name: "Raju", salary: 154, role: "dev" },
        { name: "Aakash", salary: 200, role: "dev" },
        { name: "Ramesh", salary: 3077, role: "pm" },
        { name: "Jiten", salary: 487, role: "qa" }
      ]
))}

{/* {
    console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]))
} */}

{
    console.log(incrementSalaryAndPromote([
        { name: "Raju", salary: 1500, role: "dev", workExperience: 3 },
        { name: "Aakash", salary: 2000, role: "dev", workExperience: 3 },
        { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2.5 },
        { name: "Mohan", salary: 2000, role: "dev", workExperience: 2 },
        { name: "Ramesh", salary: 3070, role: "pm", workExperience: 3 },
        { name: "Jiten", salary: 4800, role: "qa", workExperience: 3 }
      ]))
}

{console.log(getQA({
  team1: [
    { name: "Alice", salary: 50000, role: "engineer", workExperience: 2 },
    { name: "Bob", salary: 75000, role: "QA", workExperience: 5 },
    { name: "Charlie", salary: 60000, role: "developer", workExperience: 3 }
  ],
  team2: [
    { name: "David", salary: 55000, role: "engineer", workExperience: 3 },
    { name: "Eve", salary: 80000, role: "QA", workExperience: 4 },
    { name: "Frank", salary: 65000, role: "developer", workExperience: 2 }
  ]
}))}
        </div>
    )
}