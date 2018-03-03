import React from "react";
import { shallow } from "enzyme"; 

import { LoginModal } from "../../../components/UI/loginModal";

test("should render loginModal correctly", () => {
    const wrapper = shallow(<LoginModal />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on click in LoginModal", () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginModal 
        startLogin={startLoginSpy} />);
    wrapper.find("button").first().simulate("click");
    expect(startLoginSpy).toHaveBeenCalled();
});