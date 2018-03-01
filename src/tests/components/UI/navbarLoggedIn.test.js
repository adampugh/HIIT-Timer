import React from "react";
import { shallow } from "enzyme"; 

import Navbar from "../../../components/UI/navbarLoggedIn";

test("should render navbarLoggedIn correctly", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
});