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
                    <h1>+</h1>
                    <h3>Create a workout</h3>
                </div>
            </div>
        </div>
    </div>
);

export default workoutsGrid;