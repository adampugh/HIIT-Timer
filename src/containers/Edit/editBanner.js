import React from "react";

import dumbbellIcon from "../../assets/photos/dumbbell-icon.png";

const bannerText = () => (
    <div className="bannerText">
        <div className="bannerText__container">
            <h2>
                Add exercises to create a full HIIT workout. Click the + button below to add a new exercise. 
            </h2>
            <img className="bannerText__image" src={dumbbellIcon} alt="arm icon" />
        </div>
    </div>
);

export default bannerText;