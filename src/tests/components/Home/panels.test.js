import React from "react";
import { shallow } from "enzyme"; 

import Panels from "../../../components/Home/panels";

test("should render panels correctly", () => {
    const wrapper = shallow(<Panels />);
    expect(wrapper).toMatchSnapshot();
});