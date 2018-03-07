import React from "react";

const workoutsBlock = (props) => (
    <div className="workoutsBlock">
        <h1>{props.title}</h1>
        <h3>{(props.totalTime === 1) ? `${props.totalTime} Minute` : `${props.totalTime} Minutes`}</h3>
        <i className="far fa-play-circle"></i>
    </div>
);

export default workoutsBlock;