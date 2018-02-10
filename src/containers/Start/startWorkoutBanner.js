import React, { Component } from "react";

class startWorkoutBanner extends Component {
    state = {
        position: 0,
        paused: false,
        totalTime: 0
    }
    
    // startTimer - get time from workout / if 0 increase position / add to total time
    // pauseTimer - save current time ready to resume - each exercise is self contained


    // format seconds as minutes in the render function

    render() {
        return (
            <div className="startWorkoutBanner">
                <h1>{this.props.workout[this.state.position].name}</h1>
                <h1>{this.props.workout[this.state.position].time}</h1>
                <div className="startWorkoutBanner__grid">
                    <div>
                        <h3>Position</h3>
                        <h2>{this.state.position + 1} / {this.props.workout.length}</h2>
                    </div>
                    <div>
                        <h3>{this.state.paused ? "Play" : "Pause"}</h3>
                        <h2>{this.state.paused ? 
                            <i className="fas fa-play"></i> : 
                            <i className="fas fa-pause"></i>}
                        </h2>
                    </div>
                    <div>
                        <h3>Total Time</h3>
                        <h2>{this.state.totalTime}</h2>
                    </div>
                </div>
            </div>
        );
    }
};

export default startWorkoutBanner;