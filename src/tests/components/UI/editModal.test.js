import React from "react";
import { shallow } from "enzyme"; 

import { FormikEditModal, EditModal } from "../../../components/UI/editModal";
import workoutState from "../../fixtures/workouts";

test("should render EditModal correctly", () => {
    const wrapper = shallow(<EditModal 
        errors={{
            exerciseName: "",
            exerciseColor: ""
        }}
        values={{
            exerciseColor: "blue"
        }} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render FormikEditModal correctly", () => {
    const wrapper = shallow(<FormikEditModal />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startAddExercise for exercise and break in FormikEditModal", () => {
    const values = {
        exerciseName: "squats",
        exerciseMinutes: 1,
        exerciseSeconds: 10,
        exerciseColor: "#40b3e1",
        breakIncluded: true,
        breakName: "Break",
        breakMinutes: 1,
        breakSeconds: 10,
        breakColor: "#b145fe"
    }
    const startAddExerciseSpy = jest.fn();
    const wrapper = shallow(<FormikEditModal 
        startAddExercise={startAddExerciseSpy} 
        values={values} 
        workoutId={workoutState.workouts[0].id} 
        handleCloseModal={() => {}} />);
    wrapper.instance().handleSubmit(values, wrapper.props);
    expect(startAddExerciseSpy).toHaveBeenCalledWith({
        name: "squats",
        color: "#40b3e1",
        time: 70
    }, workoutState.workouts[0].id);
    expect(startAddExerciseSpy).toHaveBeenLastCalledWith({
        name: "Break",
        color: "#b145fe",
        time: 70
    }, workoutState.workouts[0].id);
    expect(startAddExerciseSpy).toHaveBeenCalledTimes(2);
});

test("should call startAddExercise for exercise only when breakIncluded is false in FormikEditModal", () => {
    const values = {
        exerciseName: "squats",
        exerciseMinutes: 1,
        exerciseSeconds: 10,
        exerciseColor: "#40b3e1",
        breakIncluded: false,
        breakName: "Break",
        breakMinutes: 1,
        breakSeconds: 10,
        breakColor: "#b145fe"
    }
    const startAddExerciseSpy = jest.fn();
    const wrapper = shallow(<FormikEditModal 
        startAddExercise={startAddExerciseSpy} 
        values={values} 
        workoutId={workoutState.workouts[0].id} 
        handleCloseModal={() => {}} />);
    wrapper.instance().handleSubmit(values, wrapper.props);
    expect(startAddExerciseSpy).toHaveBeenLastCalledWith({
        name: "squats",
        color: "#40b3e1",
        time: 70
    }, workoutState.workouts[0].id);
    expect(startAddExerciseSpy).toHaveBeenCalledTimes(1);
});