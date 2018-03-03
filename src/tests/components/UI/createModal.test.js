import React from "react";
import { shallow } from "enzyme"; 

import { CreateModal } from "../../../components/UI/createModal";
import workoutState from "../../fixtures/workouts";

test("should render createModal correctly", () => {
    const wrapper = shallow(<CreateModal 
        isOpen={true}
        handleCloseModal={() => {}} 
        workoutIndex={workoutState.workouts.length} />);
    expect(wrapper).toMatchSnapshot();
});

test("should update url state in createModal", () => {
    const wrapper = shallow(<CreateModal 
        isOpen={true}
        handleCloseModal={() => {}} 
        workoutIndex={workoutState.workouts.length} />);
    wrapper.find("input").simulate("change", {
        preventDefault: () => {},
        target: {
            value: "new workout"
        }
    });
    expect(wrapper.state("workoutUrl")).toBe("new workout");
});

test("should call startAddWorkout in createModal", () => {
    const startAddWorkoutSpy = jest.fn();
    const wrapper = shallow(<CreateModal 
        isOpen={true}
        handleCloseModal={() => {}} 
        workoutIndex={workoutState.workouts.length} 
        startAddWorkout={startAddWorkoutSpy} />);
    wrapper.find("input").simulate("change", {
        preventDefault: () => {},
        target: {
            value: "new workout"
        }
    });
    wrapper.find("button").simulate("click");
    expect(startAddWorkoutSpy).toHaveBeenCalledWith({
        title: "new workout",
        exercises: [],
        index: workoutState.workouts.length
    });
});