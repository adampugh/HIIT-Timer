import React from "react";
import { shallow } from "enzyme"; 

import EditGrid from "../../../containers/Edit/editGrid";
import workoutState from "../../fixtures/workouts";

test("should render editGrid correctly", () => {
    const wrapper = shallow(<EditGrid 
        workout={workoutState.workouts[0].exercises} 
        workoutId={workoutState.workouts[0].id} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render editGrid correctly without exercises", () => {
    const wrapper = shallow(<EditGrid 
        workout={[]} 
        workoutId={workoutState.workouts[0].id} />);
    expect(wrapper).toMatchSnapshot();
});

test("should call handleDeleteModal and update state in editGrid", () => {
    const exercises = workoutState.workouts[0].exercises
    const wrapper = shallow(<EditGrid 
        workout={exercises} 
        workoutId={workoutState.workouts[0].id}
        handleOpenDeleteModal={() => {}} />)
    wrapper.find('h3').first().simulate("click");
    expect(wrapper.state('selectedExerciseIndex')).toBe(0);
    expect(wrapper.state('selectedExerciseId')).toBe(exercises[0].id);
});