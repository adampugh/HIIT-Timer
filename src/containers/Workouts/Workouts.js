import React, { Component } from "react";

import Navbar from "../../components/UI/navbar";
import WorkoutsBanner from "./workoutsbanner";
import WorkoutsGrid from "./workoutsGrid";
import Footer from "../../components/UI/footer";


class Workouts extends Component {
    state = {
        workouts: [
            {
                title: "Leg Workout",
                totalTime: "20 minutes",
                exercises: []
            },
            {
                title: "Shoulder Workout",
                totalTime: "30 minutes",
                exercises: []
            }
        ]
    }

    render() {
        return (
            <div>
                <Navbar links={["Workouts", "Log Out"]} classes={"navbar--loggedIn"}/>
                <WorkoutsBanner />
                <WorkoutsGrid workouts={this.state.workouts} />
                <Footer />
            </div>
        );
    }
}

export default Workouts;