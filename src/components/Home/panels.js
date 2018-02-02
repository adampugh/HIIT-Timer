import React from "react";
import armIcon from "../../assets/photos/arm-icon.png";
import dumbbellIcon from "../../assets/photos/dumbbell-icon.png";
import pencilIcon from "../../assets/photos/pencil-icon.png";


const panels = () => {
    return (
        <div className="homecontent__wrapper">
            <div className="container homecontent">
                <h2>Create workouts today for fantasic that are actually really fun.</h2>
                <div className="grid--3to1 homecontent__grid">
                    <div className="homecontent__panel">
                        <img src={armIcon} alt="Arm icon" />
                        <h3>Create Workouts</h3>
                        <p>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</p>
                    </div>
                    <div className="homecontent__panel">
                        <img src={dumbbellIcon} alt="Dumbbell icon" />
                        <h3>Customize Workouts</h3>
                        <p>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</p>
                    </div>
                    <div className="homecontent__panel">
                        <img src={pencilIcon} alt="Pencil icon" />
                        <h3>Edit Workout</h3>
                        <p>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default panels;