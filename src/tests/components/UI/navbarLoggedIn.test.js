import React from "react";
import { shallow } from "enzyme"; 

import { NavbarLoggedIn } from "../../../components/UI/navbarLoggedIn";

test("should render navbarLoggedIn correctly", () => {
    const wrapper = shallow(<NavbarLoggedIn />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on click in navbarLoggedIn", () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<NavbarLoggedIn 
        startLogout={startLogoutSpy} />);
    wrapper.find("h3").last().simulate("click");
    expect(startLogoutSpy).toHaveBeenCalled();
});