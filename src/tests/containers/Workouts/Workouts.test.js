import React from "react";
import { shallow } from "enzyme"; 

import { Workouts } from "../../../containers/Workouts/Workouts";
import workoutState from "../../fixtures/workouts";

test("should render Workouts correctly", () => {
    const wrapper = shallow(<Workouts 
        workouts={workoutState.workouts}
        startFetchWorkouts={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test("should call fetchWorkouts action in Workouts", () => {
    const fetchWorkoutsSpy = jest.fn();
    shallow(<Workouts 
        workouts={workoutState.workouts}
        startFetchWorkouts={fetchWorkoutsSpy} />);
    expect(fetchWorkoutsSpy).toHaveBeenCalled();
});