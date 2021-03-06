import React from "react";

import workoutPicture from "../../assets/photos/Workout.jpg";
import videoMP4 from "../../assets/videos/Workout.mp4";
import videoWebM from "../../assets/videos/Workout.webm";
import SocialLinks from "../UI/socialLinks";

const videoBanner = (props) => (
    <header id="header">
        <div className="video__container">
            <div className="video__overlay">
                <h1>HIIT Timer</h1>
                <p>Create awesome workouts and get in shape!</p>
                <button 
                    className="btn"
                    onClick={props.handleOpenModal}
                    >Log In
                </button>
                <SocialLinks />
            </div>
            <video poster={workoutPicture} autoPlay muted loop playsInline>
                <source src={videoMP4} type="video/mp4" /> 
                <source src={videoWebM} type="video/webm" /> 
            </video>
        </div>
    </header>
);


export default videoBanner;