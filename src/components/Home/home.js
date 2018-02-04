import React, { Component } from "react";
// import Navbar from "../UI/navbar";
import Navbar from "../UI/navbarLoggedOut";
import VideoBanner from "./videoBanner";
import TextBanner from "./bannerText";
import PhoneBanner from "./phoneBanner";
import Panels from "./panels";
import Footer from "../UI/footer";


class Home extends Component {
    state = {
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
                <Navbar 
                    handleOpenModal={this.openModal} 
                    modalOpen={this.state.modalOpen}
                    handleCloseModal={this.closeModal} />
                <VideoBanner 
                    handleOpenModal={this.openModal} />
                <TextBanner />
                <PhoneBanner 
                    handleOpenModal={this.openModal} />
                <Panels />
                <Footer />
            </div>
        )
    }
} 

export default Home;