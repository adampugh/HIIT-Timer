import React, { Component } from "react";

import Navbar from "../../components/UI/navbarLoggedIn";
import EditBanner from "./editBanner";
import EditGrid from "./editGrid";
import Footer from "../../components/UI/footer";


class Edit extends Component {
    state = {
        workout: [
            {
                name: "Crunches",
                time: 180,
                color: "linear-gradient(141deg, rgba(101, 241, 238, 0.6) 0%, rgba(67, 254, 192, 0.6) 51%, rgba(67, 254, 192, 0.6) 75%)"
            },
            {
                name: "Break",
                time: 30,
                color: "grey"
            },
            {
                name: "Squats",
                time: 180,
                color: "red"
            },
            {
                name: "Break",
                time: 30,
                color: "purple"
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
                <EditBanner />
                <EditGrid 
                    workout={this.state.workout}
                    isOpen={this.state.modalOpen}
                    handleOpenModal={this.openModal}
                    handleCloseModal={this.closeModal}
                />
                <Footer />
            </div>
        );
    }
}

export default Edit;