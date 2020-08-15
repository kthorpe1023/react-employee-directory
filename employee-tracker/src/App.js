import React from "react";
import EmployeeList from "./components/EmployeeList"
import employees from "./employees.json"
import Wrapper from "./components/Wrapper/index.js"
import Header from "./components/Header/index.js"
import Filter from "./components/Filter/index.js"

class App extends React.Component {
state = {
    employees: employees,
    name: ""
};

render() {
    return (
    <Wrapper>
        <Header />
        <Filter />
        {this.state.employees.map((employee) => (
        <EmployeeList
        winner={this.winner}
        key={employee.id}
        name={employee.name}
        image={employee.image}
        occupation={employee.occupation}
        location={employee.location}
    />
      ))}
    </Wrapper>
    )
}
};

export default App;