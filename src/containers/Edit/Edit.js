import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/UI/navbarLoggedIn";
import EditBanner from "./editBanner";
import EditGrid from "./editGrid";
import Footer from "../../components/UI/footer";


export class Edit extends Component {
    state = {
        editModalOpen: false,
        deleteModalOpen: false
    }

    openEditModal = () => {
        this.setState({
            editModalOpen: true
        });
    }

    closeEditModal = () => {
        this.setState({
            editModalOpen: false
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
        let editPage = !this.props.workouts[this.props.location.state.workoutIndex] ? 
            <Redirect to="/workouts" /> : (
                <div>
                    <Navbar />
                    <EditBanner />
                    <EditGrid 
                        workout={this.props.workouts[this.props.location.state.workoutIndex].exercises}
                        workoutId={this.props.location.state.workoutId}
                        editModalIsOpen={this.state.editModalOpen}
                        handleOpenEditModal={this.openEditModal}
                        handleCloseEditModal={this.closeEditModal}
                        deleteModalIsOpen={this.state.deleteModalOpen}
                        handleOpenDeleteModal={this.openDeleteModal}
                        handleCloseDeleteModal={this.closeDeleteModal}
                    />
                    <Footer />
                </div>
            );

        return editPage;
    }
}

const mapStateToProps = state => {
    return {
        workouts: state.reducer.workouts
    }
}

export default connect(mapStateToProps)(Edit);