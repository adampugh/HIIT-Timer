import React from "react";
import PhoneImage from "../../assets/photos/iphone.png"

const phoneBanner = (props) => (
    <div className="phoneBanner">
        <div className="container">
            <div className="phoneBanner__grid">
                <img src={PhoneImage} alt="phone" />
                <div className="phoneBanner__grid__panel">
                    <h3>High-intensity interval-training (HIIT) workouts are designed to build muscle and burn fat in a short period of time. Research has shown that HIIT regiments have successfully produced significant reductions in the fat mass of the whole-body.</h3>
                    <h3>HIIT Timer allows you to get a full body cardiovascular workout wherever you are. Workout using your mobile, tablet or laptop.</h3>
                    <button 
                        className="btn--blue"
                        onClick={props.handleOpenModal}
                        >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
);

export default phoneBanner;