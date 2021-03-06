import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      },
      content : {
      }
}

export class DeleteModal extends Component {
    handleDelete(id) {
        this.props.startDeleteWorkout(id);
        this.props.handleCloseModal();
    }


    render() {
        return (
            <Modal 
                isOpen={this.props.isOpen}
                contentLabel="login modal"
                appElement={document.getElementById('root')} 
                onRequestClose={this.props.handleCloseModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
            >
                <div className="modal__box">
                    <div className="modal__header">
                        <div></div>
                        <div><h3>Delete Workout</h3></div>
                        <div className="modal__close">
                            <h3>
                                <span onClick={this.props.handleCloseModal}>
                                    <i className="fas fa-times"></i>
                                </span>
                            </h3>
                        </div>
                    </div>
                    <hr />
                    <p>Do you want to delete this workout?</p>
                    <button className="modal__login-button" onClick={() => this.handleDelete(this.props.selectedWorkoutId)} >
                        <span>Yes</span>
                    </button>
                    <button className="modal__login-button" onClick={this.props.handleCloseModal}>
                        <span>No</span>
                    </button>
                </div>
            </Modal>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        startDeleteWorkout: (id) => dispatch(actions.startDeleteWorkout(id))
    }
}

export default connect(null, mapDispatchToProps)(DeleteModal);