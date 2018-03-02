import React from "react";
import { shallow } from "enzyme"; 

import { DeleteExerciseModal } from "../../../components/UI/deleteExerciseModal";
import workoutState from "../../fixtures/workouts";

test("should render deleteExerciseModal correctly", () => {
    const wrapper = shallow(<DeleteExerciseModal />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startDeleteExercise action in DeleteExerciseModal", () => {
    const workout = workoutState.workouts[0];
    const startDeleteExerciseSpy = jest.fn();
    const wrapper = shallow(<DeleteExerciseModal 
        exerciseIndex={0}
        exerciseId={workout.exercises[0].id}
        workoutId={workout.id} 
        startDeleteExercise={startDeleteExerciseSpy} 
        handleCloseModal={() => {}} />);
    wrapper.find("button").first().simulate("click");
    expect(startDeleteExerciseSpy).toHaveBeenLastCalledWith(0, workout.id, workout.exercises[0].id);
});