import React, { Component } from "react";

class startWorkoutBanner extends Component {
    state = {
        position: 0,
        paused: true,
        totalTime: 0,
        currentName: "Start",
        currentTime: 0
    }
    
    // startTimer - get time from workout / if 0 increase position / add to total time
    startTimer = () => {
        this.setState({
            currentName: this.props.workout[this.state.position].name,
            currentTime: this.props.workout[this.state.position].time,
            paused: false
        });
        this.startExercise();
    }

    // display number of seconds left
    startExercise(exerciseTime) {
        this.exerciseInterval();
            // setInterval(() => {
            //     if (this.state.currentTime > 0) {
            //         this.setState({
            //             currentTime: this.state.currentTime - 1
            //         });
            //     } else {
            //         clearInterval();
            //     }
            // }, 1000);
    }

    nextExercise() {
        this.setState({
            position: this.state.position + 1
        });
        if (this.props.workout[this.state.position]) {
            this.startTimer();
        } else {
            this.setState({
                position: 0
            })
        }
    }

    // startExercise(exerciseTime) {
        
    //     if (this.state.currentTime > 0) {
    //         this.exerciseInterval();
    //     }
    //     this.setState({
    //         position: this.state.position + 1
    //     })
    // }
    
    exerciseInterval() {
        const interval = setInterval(() => {
            if (this.state.currentTime > 0) {
                    this.setState({
                        currentTime: this.state.currentTime - 1
                    });
                } else {
                    clearInterval(interval);
                    this.nextExercise();
                }
        }, 1000);
    }

    // pauseTimer - save current time ready to resume - each exercise is self contained


    // format seconds as minutes in the render function

    render() {

        return (
            <div className="startWorkoutBanner" onClick={this.startTimer}>
                <h1>{this.state.currentName}</h1>
                <h1>{this.state.currentTime}</h1>
                <div className="startWorkoutBanner__grid">
                    <div>
                        <h3>Position</h3>
                        <h2>{this.state.position + 1} / {this.props.workout.length}</h2>
                    </div>
                    <div>
                        <h3>{this.state.paused ? "Play" : "Pause"}</h3>
                        <h2>{this.state.paused ? <span><i className="fas fa-play"></i></span>
                            : <i className="fas fa-pause"></i> }</h2>
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