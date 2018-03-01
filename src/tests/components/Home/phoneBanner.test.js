import React from "react";
import { shallow } from "enzyme"; 

import PhoneBanner from "../../../components/Home/phoneBanner";

test("should render phoneBanner correctly", () => {
    const wrapper = shallow(<PhoneBanner />);
    expect(wrapper).toMatchSnapshot();
});

// test for modal opening function?
// handleOpenModal={false}