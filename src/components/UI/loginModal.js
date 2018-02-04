import React from "react";
import Modal from "react-modal";

const loginModal = (props) => (
    <Modal 
        isOpen={props.isOpen}
        contentLabel="login modal"   
    >
        <h1>hello</h1>
    </Modal>
);

export default loginModal;