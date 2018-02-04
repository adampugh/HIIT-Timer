import React from "react";
import Modal from "react-modal";

const customStyles = {
    overlay : {
        zIndex: 200
      },
      content : {
      }
}


const loginModal = (props) => (
    <Modal 
        isOpen={props.isOpen}
        contentLabel="login modal"
        appElement={document.getElementById('root')} 
        style={customStyles}  
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