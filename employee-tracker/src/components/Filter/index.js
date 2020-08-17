import React, {Component} from "react";
import "./style.css";
// import employees from "../../employees.json"

function Filter(props){

    return(
<div className="container">
    <div className="row">
    <div className="dropdown col-2">
    <button className="btn btn-secondary dropdown-toggle float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        The List
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick= {() => props.winners}>Robert California's winners</a>
        <a className="dropdown-item" href="#">Robert California's losers</a>
        <a className="dropdown-item" href="#">clear filter</a>
    </div>
    </div>
    <div className="input-group mb-3 col-10">
  <input 
  type="text" 
  value={props.value}
  className="form-control"
  onChange = {props.handleInputChange}
  placeholder="Search employee's name" 
  name="input"></input>
  {/* <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div> */}
</div>
    </div>
    </div>
    )
}


export default Filter;