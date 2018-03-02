import React, { Component } from "react";
import { Link } from "react-router-dom";

import WorkoutsBlock from "./workoutsBlock";
import CreateModal from "../../components/UI/createModal";
import DeleteModal from "../../components/UI/deleteModal";

class workoutsGrid extends Component {
    state = {
        selectedWorkoutId: null
    }

    handleDeleteModal = (workoutId) => {
        this.setState({
            selectedWorkoutId: workoutId
        });
        this.props.handleOpenDeleteModal()
    }

    render() {
        return (
            <div>
                <CreateModal 
                    isOpen={this.props.createModalIsOpen}
                    handleCloseModal={this.props.handleCloseCreateModal} 
                    workoutIndex={this.props.workouts.length} />
                <DeleteModal
                    isOpen={this.props.deleteModalIsOpen}
                    handleCloseModal={this.props.handleCloseDeleteModal} 
                    selectedWorkoutId={this.state.selectedWorkoutId}
                    />
                <div className="workouts__wrapper">
                    <div className="container">
                        <div className="workouts__grid">
                            {this.props.workouts.map((workout, index) =>
                                <div key={workout.title}> 
                                    <Link to={{pathname:`/workouts/${workout.title.split(" ").join("-").toLowerCase()}/start`, state: {workout: workout.exercises, workoutId: workout.id}}}>
                                        <WorkoutsBlock 
                                            title={workout.title}
                                            totalTime={workout.totalTime} />
                                    </Link>
                                    <div className="workoutsBlock__edit">
                                        <Link to={{pathname:`/workouts/${workout.title.split(" ").join("-").toLowerCase()}/edit`, state: {workout: workout.exercises, workoutId: workout.id, workoutIndex: index}}}>
                                            <h3><i className="far fa-edit"></i> Edit</h3>
                                        </Link>
                                        <h3 onClick={() => this.handleDeleteModal(workout.id)}><i className="far fa-trash-alt"></i> Delete</h3>
                                    </div>
                                </div>
                            )}
                            <div onClick={this.props.handleOpenCreateModal} className="workouts__addBlock">
                                <h1>Create a workout</h1>
                                <i className="fas fa-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default workoutsGrid;