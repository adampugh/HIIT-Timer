import React from "react";

import dumbbellIcon from "../../assets/photos/dumbbell-icon.png";

const bannerText = () => (
    <div className="bannerText">
        <div className="bannerText__container">
            <h2>
                Create custom high intentsity interval workouts with HIIT Timer. Get in shape and loose weight with HIIT Timer today! 
            </h2>
            <img className="bannerText__image" src={dumbbellIcon} alt="arm icon" />
        </div>
    </div>
);

export default bannerText;