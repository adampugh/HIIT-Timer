import React from "react";
import { shallow } from "enzyme"; 

import BannerText from "../../../components/Home/bannerText";

test("should render bannerText correctly", () => {
    const wrapper = shallow(<BannerText />);
    expect(wrapper).toMatchSnapshot();
});