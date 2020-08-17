import React from "react";
import EmployeeList from "./components/EmployeeList"
import employees from "./employees.json"
import Wrapper from "./components/Wrapper/index.js"
import Header from "./components/Header/index.js"
import Filter from "./components/Filter/index.js"

class App extends React.Component {
    state = {
        employees: employees,
        input: ""
    };
    
    winners = () => {
        const employees = this.state.employees.filter(employee => employee.winner === true);
        this.setState({employees: employees})
    };
    
    losers = () => {
        const employees = this.state.employees.filter(employee => employee.winner === false);
        this.setState({employees: employees})
    };
    
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // console.log(event.target)
        // const person = this.state.employees.filter(employee => employee.name = value)
        console.log(value)
        // Updating the input's state
        this.setState({
          [name]: value,
        });
        // return person
      };

render() {
    return (
    <Wrapper>
        <Header />
        <Filter value={this.state.input} handleInputChange={this.handleInputChange} />
        {this.state.employees.map((employee) => {
            if(employee.name.toLowerCase().includes(this.state.input.toLowerCase()))
            return(   <EmployeeList
                winner={this.winner}
                key={employee.id}
                name={employee.name}
                image={employee.image}
                occupation={employee.occupation}
                location={employee.location}
            />)
        })}
    </Wrapper>
    )
}
};

export default App;