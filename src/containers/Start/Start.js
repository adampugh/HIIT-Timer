import React, { Component } from "react";

import Navbar from "../../components/UI/navbarLoggedIn";
import StartWorkoutBanner from "../Start/startWorkoutBanner";
import Footer from "../../components/UI/footer";

// a for loop that calls the start timer function for each workout item
// inside the start timer function increment the count at the end of the setTimeout
// retrieve the amount in secs from the state 
// manage the secs in the function locally - no need to manipulate state as it only
// goes down in time. 
// work out total time locally as well.



class Start extends Component {
    state = {
        workout: [
            {
                name: "Crunches",
                time: 120
            },
            {
                name: "Break",
                time: 30
            },
            {
                name: "Squats",
                time: 120
            },
            {
                name: "Break",
                time: 30
            }
        
        ]
    }

    render() {
        return (
            <div>
                <Navbar />
                <StartWorkoutBanner workout={this.state.workout} />
                <Footer />
            </div>
        );
    }
};

export default Start;