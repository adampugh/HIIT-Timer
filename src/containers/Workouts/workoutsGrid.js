import React from "react";
import { Link } from "react-router-dom";

import WorkoutsBlock from "./workoutsBlock";
import CreateModal from "../../components/UI/createModal";

const workoutsGrid = (props) => (
    <div>
        <CreateModal 
            isOpen={props.isOpen}
            handleCloseModal={props.handleCloseModal} />
        <div className="workouts__wrapper">
            <div className="container">
                <div className="workouts__grid">
                    {props.workouts.map(workout =>
                        <div key={workout.title}> 
                            <Link to={`/workouts/${workout.title}/start`}>
                                <WorkoutsBlock 
                                    title={workout.title}
                                    totalTime={workout.totalTime} />
                            </Link>
                            <div className="workoutsBlock__edit">
                                <Link to={`/workouts/${workout.title}`}>
                                    <h3><i className="far fa-edit"></i> Edit</h3>
                                </Link>
                                <h3><i className="far fa-trash-alt"></i> Delete</h3>
                            </div>
                        </div>
                    )}
                    <div onClick={props.handleOpenModal} className="workouts__addBlock">
                        <h1>Create a workout</h1>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default workoutsGrid;