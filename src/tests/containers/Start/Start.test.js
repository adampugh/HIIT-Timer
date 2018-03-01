import React from "react";
import { shallow } from "enzyme"; 

import Start from "../../../containers/Start/Start";
import workoutState from "../../fixtures/workouts";

test("should render Start correctly", () => {
    let locationObj = {
        state: {
            workout: workoutState.workouts[0].exercises,
            id: workoutState.workouts[0].id
        }
    };
    const wrapper = shallow(<Start location={locationObj} />);
    expect(wrapper).toMatchSnapshot();
});