import React from "react";
import PhoneImage from "../../assets/photos/iphone.png"

const phoneBanner = (props) => (
    <div className="phoneBanner">
        <div className="container">
            <div className="phoneBanner__grid">
                <img src={PhoneImage} alt="phone" />
                <div>
                    <h2>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</h2>
                    <h2>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</h2>
                    <button 
                        className="btn"
                        onClick={props.handleOpenModal}
                        >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
);

export default phoneBanner;