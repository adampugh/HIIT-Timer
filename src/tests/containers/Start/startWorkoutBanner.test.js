import React from "react";
import { shallow } from "enzyme"; 

import StartWorkoutBanner from "../../../containers/Start/startWorkoutBanner";
import workoutState from "../../fixtures/workouts";

test("should render startWorkoutBanner correctly", () => {
    const wrapper = shallow(<StartWorkoutBanner workout={workoutState.workouts[0].exercises} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render redirect if exercise not passed to startWorkoutBanner", () => {
    const wrapper = shallow(<StartWorkoutBanner workout={[]} />);
    expect(wrapper).toMatchSnapshot();
});