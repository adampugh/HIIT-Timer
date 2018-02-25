import React, { Component } from "react";

import EditBlock from "./editBlock";
import EditModal from "../../components/UI/editModal";
import DeleteExerciseModal from "../../components/UI/deleteExerciseModal";

class editGrid extends Component {
    state = {
        selectedExerciseIndex: null
    }

    handleDeleteModal = (exerciseIndex) => {
        this.setState({
            selectedExerciseIndex: exerciseIndex
        });
        this.props.handleOpenDeleteModal()
    }

    render() {
        return (
            <div>
                <EditModal 
                    isOpen={this.props.editModalIsOpen}
                    handleCloseModal={this.props.handleCloseEditModal}
                    workoutId={this.props.workoutId}
                />
                <DeleteExerciseModal
                    isOpen={this.props.deleteModalIsOpen}
                    handleCloseModal={this.props.handleCloseDeleteModal} 
                    modalTitle="Exercise"
                    exerciseIndex={this.state.selectedExerciseIndex}
                    workoutId={this.props.workoutId}
                />
                <div className="edit__wrapper">
                    <div className="container">
                        <div className="edit__grid">
                            {this.props.workout.map((exercise, index) => 
                                <div key={`${exercise.name}${index}`}>
                                    <EditBlock 
                                        name={exercise.name}
                                        time={exercise.time}
                                        color={exercise.color}
                                    />
                                    <div className="editBlock__delete">
                                        <h3 onClick={() => this.handleDeleteModal(index)}><i className="far fa-trash-alt"></i> Delete</h3>
                                    </div>
                                </div>
                            )}
                            <div onClick={this.props.handleOpenEditModal} className="edit__addBlock">
                                <h1>Add an Exercise</h1>
                                <i className="fas fa-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default editGrid;