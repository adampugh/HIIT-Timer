import React, { Component } from "react";
import { Redirect } from "react-router-dom";
var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");


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
        if (this.state.currentTime === 0) {
            this.setState({
                currentTime: this.props.workout[this.state.position].time,
            });
        }
        this.setState({
            currentName: this.props.workout[this.state.position].name,
            paused: false
        });
        this.startExercise();
    }

    // display number of seconds left
    startExercise(exerciseTime) {
        this.exerciseInterval();
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
    
    exerciseInterval() { 
        const interval = setInterval(() => {
            if (this.state.currentTime > 0 && !this.state.paused) {
                this.setState({
                    currentTime: this.state.currentTime - 1,
                    totalTime: this.state.totalTime + 1
                });
            } else if (this.state.paused) {
                clearInterval(interval);
            } else {
                clearInterval(interval);
                this.nextExercise();
            }
        }, 1000);
    }

    stopTimer() {
        this.setState({
            paused: true
        });
    }

    handleBannerClick = () => {
        if (this.state.paused === true) {
            this.startTimer();
        } else {
            this.stopTimer();
        }
    }

    // format seconds as minutes in the render function

    render() {
        let customColor;
        if (this.props.workout[this.state.position]) {
            customColor = {
                background: this.props.workout[this.state.position].color
            }
        }
        
        let startWorkoutBannerPage = this.props.workout.length < 1 ? (
            <Redirect to="/workouts" />
        ) : (
            <div className="startWorkoutBanner" onClick={this.handleBannerClick} style={customColor}>
                <h1>{this.state.currentName}</h1>
                <h1>{moment.duration(this.state.currentTime, "seconds").format("mm:ss")}</h1>
                <div className="startWorkoutBanner__grid">
                    <div>
                        <h3>Position</h3>
                        <h2>{this.state.position + 1} / {this.props.workout.length}</h2>
                    </div>
                    <div>
                        <h3>{this.state.paused ? "Play" : "Pause"}</h3>
                        <h3>{this.state.paused ? '▶' : "▌▌"}</h3>
                    </div>
                    <div>
                        <h3>Total Time</h3>
                        <h2>{moment.duration(this.state.totalTime, "seconds").format("mm:ss")}</h2>
                    </div>
                </div>
            </div>
        )
        return startWorkoutBannerPage;
    }
};



// '▷' : '❘ ❘'

// <h2>{this.state.paused ? <span><i className="fas fa-play"></i></span>
//     : <span><i className="fas fa-pause"></i></span> }</h2>


export default startWorkoutBanner;