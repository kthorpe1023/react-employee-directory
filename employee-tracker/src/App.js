import React from "react";
import EmployeeList from "./components/EmployeeList"
import employees from "./employees.json"
import Wrapper from "./components/Wrapper/index.js"
import Header from "./components/Header/index.js"
import Filter from "./components/Filter/index.js"

class App extends React.Component {
state = {
    employees: employees
};

winners = (winner) => {
    const employees = this.state.employees.filter(employee => employee.winner === true);
    this.setState({employees: employees})
};

losers = (winner) => {
    const employees = this.state.employees.filter(employee => employee.winner === false);
    this.setState({employees: employees})
}


render() {
    return (
    <Wrapper>
        <Header></Header>
        <Filter></Filter>
        {this.state.employees.map((employee) => (
        <EmployeeList
        winners={this.winners}
        loser={this.losers}
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