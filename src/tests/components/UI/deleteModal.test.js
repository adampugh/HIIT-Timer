import React from "react";
import { shallow } from "enzyme"; 

import { DeleteModal } from "../../../components/UI/deleteModal";
import workoutState from "../../fixtures/workouts";

test("should render DeleteModal correctly", () => {
    const wrapper = shallow(<DeleteModal />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startDeleteWorkout action in DeleteModal", () => {
    const workout = workoutState.workouts[0];
    const startDeleteWorkoutSpy = jest.fn();
    const wrapper = shallow(<DeleteModal 
        handleCloseModal={() => {}} 
        selectedWorkoutId={workout.id} 
        startDeleteWorkout={startDeleteWorkoutSpy} />);
    wrapper.find("button").first().simulate("click");
    expect(startDeleteWorkoutSpy).toHaveBeenCalledWith(workout.id);
});