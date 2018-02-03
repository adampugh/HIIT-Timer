import React from "react";

import WorkoutsBlock from "./workoutsBlock";

const workoutsGrid = (props) => (
    <div className="workouts__wrapper">
        <div className="container">
            <div className="workouts__grid">
                {props.workouts.map(workout => 
                    <WorkoutsBlock 
                        key={workout.title}
                        title={workout.title}
                        totalTime={workout.totalTime}/>
                )}
                <div className="workouts__addBlock">
                    <h1>Create a workout</h1>
                    <i className="fas fa-plus-circle"></i>
                </div>
            </div>
        </div>
    </div>
);

export default workoutsGrid;