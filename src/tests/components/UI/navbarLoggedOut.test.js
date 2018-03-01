import React from "react";
import { shallow } from "enzyme"; 

import Navbar from "../../../components/UI/navbarLoggedOut";

test("should render navbarLoggedOut correctly", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
});

test("should call handleOpenModal in navbarLoggedOut", () => {
    const handleOpenModalSpy = jest.fn();
    const wrapper = shallow(<Navbar handleOpenModal={handleOpenModalSpy} />)
    wrapper.find('h3').simulate("click");
    expect(handleOpenModalSpy).toHaveBeenCalled();
});