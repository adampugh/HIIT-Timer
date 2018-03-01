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

// mapstatetoprops using redux to access db

// class Start extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <StartWorkoutBanner workout={this.props.location.state.workout} />
//                 <Footer />
//             </div>
//         );
//     }
// };

const Start = (props) => (
    <div>
        <Navbar />
        <StartWorkoutBanner workout={props.location.state.workout} />
        <Footer />
    </div>
);



export default Start;