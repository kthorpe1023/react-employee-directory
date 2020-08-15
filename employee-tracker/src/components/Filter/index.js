import React, {Component} from "react";
import "./style.css";
import employees from "../../employees.json"

class Filter extends Component{

    state = {
        employees: employees,
        name: ""
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
        const employees = this.state.employees.filter(employee => employee.name = value)
        console.log(employees)
        // Updating the input's state
        this.setState({
          [name]: value,
          employees: employees
        });
      };
      render(){
    return(
<div className="container">
    <div className="row">
    <div className="dropdown col-2">
    <button className="btn btn-secondary dropdown-toggle float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        The List
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick= {() => this.winners}>Robert California's winners</a>
        <a className="dropdown-item" href="#">Robert California's losers</a>
        <a className="dropdown-item" href="#">clear filter</a>
    </div>
    </div>
    <div className="input-group mb-3 col-10">
  <input 
  type="text" 
  className="form-control"
  onChange = {this.handleInputChange}
  placeholder="Search employee's name" 
  aria-label="Recipient's username"></input>
  {/* <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div> */}
</div>
    </div>
    </div>
    )
}
}

export default Filter;