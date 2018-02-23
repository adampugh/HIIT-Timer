import React from "react";

import EditBlock from "./editBlock";
import EditModal from "../../components/UI/editModal";
import DeleteModal from "../../components/UI/deleteModal";

// add delete exercise modal
// within modal dispatch delete exercise action 
// will have to pass id to modal


const editGrid = (props) => (
    <div>
        <EditModal 
            isOpen={props.editModalIsOpen}
            handleCloseModal={props.handleCloseEditModal}
        />
        <DeleteModal
            isOpen={props.deleteModalIsOpen}
            handleCloseModal={props.handleCloseDeleteModal} 
            modalTitle="Exercise"
        />
        <div className="edit__wrapper">
            <div className="container">
                <div className="edit__grid">
                    {props.workout.map((exercise, index) => 
                        <div key={`${exercise.name}${index}`}>
                            <EditBlock 
                                name={exercise.name}
                                time={exercise.time}
                                color={exercise.color}
                            />
                            <div className="editBlock__delete">
                                <h3 onClick={props.handleOpenDeleteModal}><i className="far fa-trash-alt"></i> Delete</h3>
                            </div>
                        </div>
                    )}
                    <div onClick={props.handleOpenEditModal} className="edit__addBlock">
                        <h1>Add an Exercise</h1>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default editGrid;