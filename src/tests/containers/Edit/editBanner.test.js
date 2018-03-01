import React from "react";
import { shallow } from "enzyme"; 

import EditBanner from "../../../containers/Edit/editBanner";

test("should render editBanner correctly", () => {
    const wrapper = shallow(<EditBanner />);
    expect(wrapper).toMatchSnapshot();
});