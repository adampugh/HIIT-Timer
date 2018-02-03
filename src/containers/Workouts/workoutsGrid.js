import React from "react";
import { Link } from "react-router-dom";

import WorkoutsBlock from "./workoutsBlock";


const workoutsGrid = (props) => (
    <div className="workouts__wrapper">
        <div className="container">
            <div className="workouts__grid">
                {props.workouts.map(workout =>
                    <div key={workout.title}> 
                        <Link to={`/workouts/${workout.title}`}>
                            <WorkoutsBlock 
                                title={workout.title}
                                totalTime={workout.totalTime} />
                        </Link>
                        <div className="workoutsBlock__edit">
                            <h3><i className="far fa-edit"></i> Edit</h3>
                            <h3><i className="far fa-trash-alt"></i> Delete</h3>
                        </div>
                    </div>
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