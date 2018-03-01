import React from "react";
import { shallow } from "enzyme"; 

import VideoBanner from "../../../components/Home/videoBanner";

test("should render videoBanner correctly", () => {
    const wrapper = shallow(<VideoBanner />);
    expect(wrapper).toMatchSnapshot();
});

test("should call handleOpenModal in videoBanner", () => {
    const handleOpenModalSpy = jest.fn();
    const wrapper = shallow(<VideoBanner handleOpenModal={handleOpenModalSpy} />)
    wrapper.find('button').simulate("click");
    expect(handleOpenModalSpy).toHaveBeenCalled();
});