import React from "react";
import { shallow } from "enzyme"; 

import WorkoutsGrid from "../../../containers/Workouts/workoutsGrid";
import workoutState from "../../fixtures/workouts";

test("should render workoutsGrid correctly", () => {
    const wrapper = shallow(<WorkoutsGrid workouts={workoutState.workouts} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render workoutsGrid correctly without any workouts", () => {
    const wrapper = shallow(<WorkoutsGrid workouts={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should call handleDeleteModal and update state in workoutsGrid", () => {
    const wrapper = shallow(<WorkoutsGrid 
        workouts={workoutState.workouts} 
        workoutId={workoutState.workouts[1].id}
        handleOpenDeleteModal={() => {}} />)
    wrapper.find('h3').last().simulate("click");
    expect(wrapper.state('selectedWorkoutId')).toBe(workoutState.workouts[1].id);
});