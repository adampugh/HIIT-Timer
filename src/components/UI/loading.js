import React from "react";

import dumbbellIcon from "../../assets/photos/dumbbell-icon.png";


const loading = () => (
    <div className="loading">
        <img className="workoutsBanner__image" src={dumbbellIcon} alt="arm icon" />
        <h2>. . . Loading</h2>
    </div>
);

export default loading;