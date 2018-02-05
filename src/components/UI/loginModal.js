import React from "react";
import Modal from "react-modal";

const customStyles = {
    overlay : {
        zIndex: 200,
        // display: 'flex',
        // alignItems: "center",
        // justifyContent: "center"
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
    >
        <div className="loginModal">
            <h3 className="loginModal__close">
                <span onClick={props.handleCloseModal}>
                    <i className="fas fa-times"></i>
                </span>
            </h3>
        </div>
    </Modal>
);

export default loginModal;