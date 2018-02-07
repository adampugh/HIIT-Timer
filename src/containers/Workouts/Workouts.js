import React, { Component } from "react";

import Navbar from "../../components/UI/navbarLoggedIn";
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
        ],
        modalOpen: false
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <WorkoutsBanner />
                <WorkoutsGrid 
                    workouts={this.state.workouts} 
                    isOpen={this.state.modalOpen}
                    handleOpenModal={this.openModal}
                    handleCloseModal={this.closeModal} />
                <Footer />
            </div>
        );
    }
}

export default Workouts;