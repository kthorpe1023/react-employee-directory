import React from "react";
import EmployeeList from "./components/EmployeeList"
import employees from "./employees.json"
import Wrapper from "./components/Wrapper/index.js"
import Header from "./components/Header/index.js"
import Filter from "./components/Filter/index.js"

class App extends React.Component {
    //state targets employees to be displayed and the input that will change
    state = {
        employees: employees,
        input: ""
    };
    
        //function to target employees with key value pair of winner and true
    winners = () => {
        const employees = this.state.employees.filter(employee => employee.winner === true);
        this.setState({employees: employees})
    };

    //function to target employees with key value pair of winner and false
    losers = () => {
        const employees = this.state.employees.filter(employee => employee.winner === false);
        this.setState({employees: employees})
    };

    //function to return employees to full employees.json file
    clear = () => {
        this.setState({employees:employees})
    }
    
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        console.log(value)
        // Updating the input's state
        this.setState({
          [name]: value,
        });
      };

render() {
    return (
    <Wrapper>
        <Header />
        <Filter 
        value={this.state.input} 
        handleInputChange={this.handleInputChange} 
        handleWin={this.winners} 
        handleLoss={this.losers}
        handleClear={this.clear}/>
        {this.state.employees.map((employee) => {
            //set name and search input to lower case and filter based on if name includes searched input
            if(employee.name.toLowerCase().includes(this.state.input.toLowerCase()))
            return(   <EmployeeList
                winner={this.winner}
                key={employee.id}
                name={employee.name}
                image={employee.image}
                occupation={employee.occupation}
                location={employee.location}
            />); 
            //code for the dropdown to filter winners and losers
            // else if (employee.winner===true)
            // return(<EmployeeList
            //     winner={this.winner}
            //     key={employee.id}
            //     name={employee.name}
            //     image={employee.image}
            //     occupation={employee.occupation}
            //     location={employee.location}
            // />); else if (employee.winner===false)
            // return(<EmployeeList
            //     winner={this.winner}
            //     key={employee.id}
            //     name={employee.name}
            //     image={employee.image}
            //     occupation={employee.occupation}
            //     location={employee.location}
            // />)
        })}
        
    </Wrapper>
    )
}
};

export default App;