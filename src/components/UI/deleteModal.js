import React from "react";
import Modal from "react-modal";



const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      },
      content : {
      }
}

const loginModal = (props) => (
    <Modal 
        isOpen={props.isOpen}
        contentLabel="login modal"
        appElement={document.getElementById('root')} 
        onRequestClose={props.handleCloseModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
    >
        <div className="modal__box">
            <div className="modal__header">
                <div></div>
                <div><h3>Delete {props.modalTitle}</h3></div>
                <div className="modal__close">
                    <h3>
                        <span onClick={props.handleCloseModal}>
                            <i className="fas fa-times"></i>
                        </span>
                    </h3>
                </div>
            </div>
            <hr />
            <p>Do you want to delete this {props.modalTitle.toLowerCase()}?</p>
            <button className="modal__login-button">

                <span>Yes</span>
            </button>
            <button className="modal__login-button">

                <span>No</span>
            </button>
        </div>
    </Modal>
);

export default loginModal;