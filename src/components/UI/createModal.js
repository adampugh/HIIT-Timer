import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      },
      content : {
      }
}

const createModal = (props) => (
    <Modal 
        isOpen={props.isOpen}
        contentLabel="create workout modal"
        appElement={document.getElementById('root')} 
        onRequestClose={props.handleCloseModal}
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
                        <span onClick={props.handleCloseModal}>
                            <i className="fas fa-times"></i>
                        </span>
                    </h3>
                </div>
            </div>
            <hr />
            <div className="modal--create">
                <label>Name</label>
                <input type="text" />
                <Link to="/" >
                    <button className="modal__button">Create Workout</button>
                </Link>
            </div>
        </div>
        
    </Modal>
);

export default createModal;



