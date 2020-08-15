import React from "react";
import "./style.css"

function EmployeeList(props) {
  return (
<div className="card mb-3 size">
  <div className="row no-gutters">
    <div className="col-md-12">
      <img src={props.image} class="card-img-top img-size" alt={props.name}></img>
    </div>
    <div className="col-md-12">
      <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <ul>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
      </div>
    </div>
  </div>
</div>
  );
}

export default EmployeeList;
