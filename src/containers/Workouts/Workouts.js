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
        createModalOpen: false,
        deleteModalOpen: false
    }

    openCreateModal = () => {
        this.setState({
            createModalOpen: true
        });
    }

    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        });
    }

    openDeleteModal = () => {
        this.setState({
            deleteModalOpen: true
        });
    }

    closeDeleteModal = () => {
        this.setState({
            deleteModalOpen: false
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <WorkoutsBanner />
                <WorkoutsGrid 
                    workouts={this.state.workouts} 
                    createModalIsOpen={this.state.createModalOpen}
                    handleOpenCreateModal={this.openCreateModal}
                    handleCloseCreateModal={this.closeCreateModal} 
                    deleteModalIsOpen={this.state.deleteModalOpen}
                    handleOpenDeleteModal={this.openDeleteModal}
                    handleCloseDeleteModal={this.closeDeleteModal} />
                <Footer />
            </div>
        );
    }
}

export default Workouts;