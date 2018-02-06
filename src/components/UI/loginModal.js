import React from "react";
import Modal from "react-modal";

import GoogleIcon from "../../assets/photos/googlelogo.jpg";
import FacebookIcon from "../../assets/photos/facebooklogo.jpg";

const customStyles = {
    overlay : {
        zIndex: 2000,
        // display: 'flex',
        // alignItems: "center",
        // justifyContent: "center"
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
        <div className="loginModal">
            <div className="loginHeader">
                <div></div>
                <div><h3>Log In</h3></div>
                <div className="loginModal__close">
                    <h3>
                        <span onClick={props.handleCloseModal}>
                            <i className="fas fa-times"></i>
                        </span>
                    </h3>
                </div>
            </div>
            <hr />

            <button className="loginModal__button">
                <img src={GoogleIcon} alt="google logo" />
                <span>Sign in with Google</span>
            </button>
            <button className="loginModal__button">
                <img src={FacebookIcon} alt="facebook logo" />
                <span>Sign in with Facebook</span>
            </button>
        </div>
    </Modal>
);

export default loginModal;