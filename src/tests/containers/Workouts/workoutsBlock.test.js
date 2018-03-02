import React from "react";
import { shallow } from "enzyme"; 

import WorkoutsBlock from "../../../containers/Workouts/workoutsBlock";
import workoutState from "../../fixtures/workouts";

test("should render editBlock correctly", () => {
    const workout = workoutState.workouts[0];
    const wrapper = shallow(<WorkoutsBlock 
        title={workout.title} 
        totalTime={workout.totalTime} />);
    expect(wrapper).toMatchSnapshot();
});