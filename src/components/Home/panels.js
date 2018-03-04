import React from "react";
import armIcon from "../../assets/photos/arm-icon.png";
import dumbbellIcon from "../../assets/photos/dumbbell-icon.png";
import pencilIcon from "../../assets/photos/pencil-icon.png";


const panels = () => {
    return (
        <div className="homecontent__wrapper">
            <div className="container homecontent">
                <h2>Create workouts today and get in shape!</h2>
                <div className="grid--3to1 homecontent__grid">
                    <div className="homecontent__panel">
                        <img src={armIcon} alt="Arm icon" />
                        <h3>Create Workouts</h3>
                        <p>Create workouts from scratch by first entering a workout title. Add exercises and customize the workout. Start the clock and get exercising!</p>
                    </div>
                    <div className="homecontent__panel">
                        <img src={dumbbellIcon} alt="Dumbbell icon" />
                        <h3>Customize Workouts</h3>
                        <p>Add exercises that suit your goals for losing weight or building muscle. Choose to include breaks and different colours for each exercise.</p>
                    </div>
                    <div className="homecontent__panel">
                        <img src={pencilIcon} alt="Pencil icon" />
                        <h3>Edit Workout</h3>
                        <p>Delete and add workouts to adapt to your schedule or workout regime. Update exercises to continue your progression and help you reach your goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default panels;