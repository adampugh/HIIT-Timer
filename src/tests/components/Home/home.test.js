import React from "react";
import { shallow } from "enzyme"; 

import Home from "../../../components/Home/home";

test("should render homePage correctly", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});