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
                time: 1,
                color: "linear-gradient(141deg, rgba(101, 241, 238, 0.6) 0%, rgba(67, 254, 192, 0.6) 51%, rgba(67, 254, 192, 0.6) 75%)"
            },
            {
                name: "Break",
                time: 1,
                color: "grey"
            },
            {
                name: "Squats",
                time: 1,
                color: "red"
            },
            {
                name: "Break",
                time: 1,
                color: "purple"
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