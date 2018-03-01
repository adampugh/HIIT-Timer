import React from "react";
import { shallow } from "enzyme"; 

import SocialLinks from "../../../components/UI/socialLinks";

test("should render socialLinks correctly", () => {
    const wrapper = shallow(<SocialLinks />);
    expect(wrapper).toMatchSnapshot();
});