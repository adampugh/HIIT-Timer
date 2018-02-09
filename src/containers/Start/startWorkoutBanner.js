import React from "react";

const startWorkoutBanner = (props) => (
    <div className="startWorkoutBanner">
        <h1>Leg Workout</h1>
        <h1>04:20</h1>
        <div className="startWorkoutBanner__grid">
            <div>
                <h3>Position</h3>
                <h2>2 / 8</h2>
            </div>
            <div>
                <h3>Play / Pause</h3>
                <h2><i class="fas fa-play"></i></h2>
            </div>
            <div>
                <h3>Total Time</h3>
                <h2>14:32</h2>
            </div>
        </div>
    </div>
);

export default startWorkoutBanner;