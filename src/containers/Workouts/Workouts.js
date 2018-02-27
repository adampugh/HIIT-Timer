import React, { Component } from "react";
import { connect } from "react-redux";


import Navbar from "../../components/UI/navbarLoggedIn";
import WorkoutsBanner from "./workoutsbanner";
import WorkoutsGrid from "./workoutsGrid";
import Footer from "../../components/UI/footer";
import * as actions from "../../store/actions/actions";

class Workouts extends Component {
    state = {
        createModalOpen: false,
        deleteModalOpen: false
    }

    componentWillMount() {
        this.props.startFetchWorkouts();
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
                    workouts={this.props.workouts} 
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

const mapStateToProps = state => {
    return {
        workouts: state.reducer.workouts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startFetchWorkouts: () => dispatch(actions.startFetchWorkouts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Workouts);