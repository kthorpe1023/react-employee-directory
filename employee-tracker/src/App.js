import React from "react";
import EmployeeList from "./components/EmployeeList"
import employees from "./employees.json"

function App(){
    return (
    <EmployeeList 
    name={employees[0].name}
    image={employees[0].image}
    occupation={employees[0].occupation}
    location={employees[0].location}
    />
    )
};

export default App;