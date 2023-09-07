import React from "react";

const Episode = ({ episode }) => {
  return (
<div class="card">
  <h5 class="card-header"> Episode code: {episode.episode}</h5>
  <div class="card-body">
    <h5 class="card-title">{episode.name}</h5>
    <p class="card-text">The air date of the episode: {episode.air_date}</p>
    <a href="#" class="btn btn-primary">See Characters on this episode</a>
  </div>
</div>
  );
}

export default Episode;
