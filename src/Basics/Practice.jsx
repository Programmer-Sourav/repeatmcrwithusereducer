import { useState } from "react"

export default function Practice() {
   
    const [personObject, setPersonObject] = useState([{id: 1, name: "Sourav", age: "03", location: "Agartala"}, 
              {id:2, name: "Anoop", age: "24", location: "Lucknow"}, 
              {id:3, name: "Rana", age: "32", location: "Udaipur"}])

     
    const company = {
                departments: {
                  sales: [],
                  engineering: [],
                },
              };

    const students = [
                { name: 'Ajay', score: 85 },
                { name: 'Mou', score: 92 },
                { name: 'Bilu', score: 68 },
              ];          
    const [salesTeam, setSalesTeam] = useState(company.departments.sales)
    const [engineeringTeam, setEngineeringTeam] = useState(company.departments.engineering)
    
    //js
    const addEmployee = (department, employee) => {
        company.departments[department].push(employee);
        console.log(company.departments[department])
      };
    
    const updateObject = (itemId) =>{
       setPersonObject(personObject.map((person)=>person.id===itemId ? {...person, age:"04", location: "Bangalore"} : person))
    }          

   
    const addAnEmployeToSales = () =>{
      const employee = {id:2, name: "Anoop", age: "24", location: "Lucknow"}
      setSalesTeam([...salesTeam, employee])
    }

    const addAnEmployeeToEngineering = () =>{
       const employee = {id: 1, name: "Sourav", age: "03", location: "Agartala"}
       setEngineeringTeam([...engineeringTeam, employee])
    }

    const [student, setStudent]  = useState(students)
    const sortStudents = () =>{
       const result =  [...student].sort((s1,s2)=>s2.score>s1.score ? 1: -1)
       setStudent(result)
    }
   
    return(
        <div>
         {
            personObject.map((person)=>(
              <li>{person.id} -   {person.name} -   {person.age}  -  {person.location}</li>  
            ))
         }   
         <button onClick={()=>updateObject(1)}>Update</button>

         <button onClick={()=>addAnEmployeToSales()}>Add To Sales</button>
         <button onClick={()=>addAnEmployeeToEngineering()}>Add To Engineering</button>
         
            <p>Sales Team: {salesTeam.map((person)=>(
                <li>{person.id} -   {person.name} -   {person.age}  -  {person.location}</li>
            ))}
            
            Engineering Team: 
            {engineeringTeam.map((person)=>(
                <li>{person.id} -   {person.name} -   {person.age}  -  {person.location}</li>
            ))}
            
            <button onClick={()=> {addEmployee("sales", {id: 1, name: "Sourav", age: "03", location: "Agartala"})}}>Add Employee</button>
           
            </p>
            {
                student.map((eachStudent)=>(
                   <li>{eachStudent.name} - {eachStudent.score}</li> 
                ))
            }
            <button onClick={()=>{sortStudents()}}>Sort On Score</button>
        </div>
    )
}