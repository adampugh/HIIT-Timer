import React from "react";
import { shallow } from "enzyme"; 

import PhoneBanner from "../../../components/Home/phoneBanner";

test("should render phoneBanner correctly", () => {
    const wrapper = shallow(<PhoneBanner />);
    expect(wrapper).toMatchSnapshot();
});

test("should call handleOpenModal in phoneBanner", () => {
    const handleOpenModalSpy = jest.fn();
    const wrapper = shallow(<PhoneBanner handleOpenModal={handleOpenModalSpy} />)
    wrapper.find('button').simulate("click");
    expect(handleOpenModalSpy).toHaveBeenCalled();
});