import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
 
import GoogleIcon from "../../assets/photos/googlelogo.jpg";
import FacebookIcon from "../../assets/photos/facebooklogo.jpg";
import { startLogin } from "../../store/actions/actions";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      },
      content : {
      }
}

export const LoginModal = (props) => (
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
                <div><h3>Log In</h3></div>
                <div className="modal__close">
                    <h3>
                        <span onClick={props.handleCloseModal}>
                            <i className="fas fa-times"></i>
                        </span>
                    </h3>
                </div>
            </div>
            <hr />

            <button onClick={props.startLogin} className="modal__login-button">
                <img src={GoogleIcon} alt="google logo" />
                <span>Sign in with Google</span>
            </button>
            <button className="modal__login-button">
                <img src={FacebookIcon} alt="facebook logo" />
                <span>Sign in with Facebook</span>
            </button>
        </div>
    </Modal>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(null, mapDispatchToProps)(LoginModal);