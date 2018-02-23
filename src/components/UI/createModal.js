import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-modal";

import * as actions from "../../store/actions/actions";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      }
}

class createModal extends Component { 
    state = {
        workoutUrl: ""
    }

    updateUrl = (e) => {
        this.setState({
            workoutUrl: e.target.value
        });
    }

    handleOnClick = () => {
        let workout = {
            title: this.state.workoutUrl,
            totalTime: 0,
            exercises: []
        };
        this.props.workoutAdded(workout);
    }

    render() {

        return (
            <Modal 
            isOpen={this.props.isOpen}
            contentLabel="create workout modal"
            appElement={document.getElementById('root')} 
            onRequestClose={this.props.handleCloseModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
        >
            <div className="modal__box">
                <div className="modal__header">
                    <div></div>
                    <div><h3>Create Workout</h3></div>
                    <div className="modal__close">
                        <h3>
                            <span onClick={this.props.handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </span>
                        </h3>
                    </div>
                </div>
                <hr />
                <div className="modal--create">
                    <label>Name</label>
                    <input type="text" maxLength="20" onChange={(e) => this.updateUrl(e)}/>
                    <Link to={{pathname:`/workouts/${this.state.workoutUrl.split(" ").join("-").toLowerCase()}/edit`, state: {workout: []}}}>
                        <button onClick={this.handleOnClick} disabled={this.state.workoutUrl.length < 1} className="modal__button">Create Workout</button>
                    </Link>
                </div>
            </div>
        </Modal>
        )
    }
}    

const mapDispatchToProps = dispatch => {
    return {
        workoutAdded: (workout) => dispatch(actions.addWorkout(workout))
    }
}


export default connect(null, mapDispatchToProps)(createModal);



