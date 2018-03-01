import React from "react";
import { shallow } from "enzyme"; 

import WorkoutsBanner from "../../../containers/Workouts/workoutsBanner";

test("should render workoutsBanner correctly", () => {
    const wrapper = shallow(<WorkoutsBanner />);
    expect(wrapper).toMatchSnapshot();
});