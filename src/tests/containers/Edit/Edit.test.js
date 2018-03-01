import React from "react";
import { shallow } from "enzyme"; 

import { Edit } from "../../../containers/Edit/Edit";
import workoutState from "../../fixtures/workouts";

test("should render Edit correctly", () => {
    let locationObj = {
        state: {
            workoutIndex: 0
        }
    };
    const wrapper = shallow(<Edit workouts={workoutState.workouts} location={locationObj} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render redirect if location props are not passed in Edit", () => {
    let locationObj = {
        state: {
            workoutIndex: undefined
        }
    }
    const wrapper = shallow(<Edit workouts={workoutState.workouts} location={locationObj}/>);
    expect(wrapper).toMatchSnapshot();
});
