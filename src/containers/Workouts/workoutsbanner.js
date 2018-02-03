import React from "react";

import armIcon from "../../assets/photos/arm-icon.png";

const workoutsBanner = () => (
    <div className="bannerText">
        <div className="bannerText__container">
            <img className="workoutsBanner__image" src={armIcon} alt="arm icon" />
            <h2>
                Add a new workout and start today! Click the + button below to add a new workout.
            </h2>
            
        </div>
    </div>
);

export default workoutsBanner;