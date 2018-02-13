import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      }
}

class editModal extends Component { 



    
    render() {
        return (
            <Modal 
            isOpen={this.props.isOpen}
            contentLabel="add exercise modal"
            appElement={document.getElementById('root')} 
            onRequestClose={this.props.handleCloseModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
        >
            <div className="modal__box">
                <div className="modal__header">
                    <div></div>
                    <div><h3>Add Exercise</h3></div>
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
                    <input type="text" maxLength="20" />
                    <button disabled={false} className="modal__button">Create Workout</button>
                </div>
            </div>
        </Modal>
        )
    }
}    


export default editModal;
