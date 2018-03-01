import React from "react";
import { shallow } from "enzyme"; 

import EditBlock from "../../../containers/Edit/editBlock";
import workoutState from "../../fixtures/workouts";

test("should render editBlock correctly", () => {
    const exercise = workoutState.workouts[0].exercises[0];
    const wrapper = shallow(<EditBlock 
        name={exercise.name} 
        time={exercise.time} />);
    expect(wrapper).toMatchSnapshot();
});