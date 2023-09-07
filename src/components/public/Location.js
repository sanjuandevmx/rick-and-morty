import React from "react";

const Location = ({ location }) => {
  return (
<div class="card">
  <div class="card-body">

    <h5 class="card-title">{location.name}</h5>
    <p class="card-text">Type: {location.type}</p>
    <p class="card-text">Dimension: {location.dimension}</p>
    <a href="#" class="btn btn-primary">See Characters on this location</a>
  </div>
</div>
  );
}

export default Location;
