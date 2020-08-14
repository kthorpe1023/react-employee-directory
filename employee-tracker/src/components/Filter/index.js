import React from "react";
import "./style.css";

function Filter(){
    return(
<div class="container">
    <div class="row">
    <div class="dropdown col-5">
    <button class="btn btn-secondary dropdown-toggle float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        The List
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Robert California's winners</a>
        <a class="dropdown-item" href="#">Robert California's losers</a>
        <a class="dropdown-item" href="#">clear filter</a>
    </div>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-secondary">Order by Location</button>
    </div>
    <div class="col-5">
    <button type="button" class="btn btn-secondary float-left">Clear all Filters</button>
    </div>
    </div>
</div>
    )
}

export default Filter;