import React, { Component } from "react";

import Navbar from "../../components/UI/navbarLoggedIn";
import EditBanner from "./editBanner";
import EditGrid from "./editGrid";
import Footer from "../../components/UI/footer";


class Edit extends Component {
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

        return (
            <div>
                <Navbar />
                <EditBanner />
                <EditGrid 
                    workout={this.props.location.state.workout}
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
    }
}

export default Edit;