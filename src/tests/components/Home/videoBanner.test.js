import React from "react";
import { shallow } from "enzyme"; 

import VideoBanner from "../../../components/Home/videoBanner";

test("should render videoBanner correctly", () => {
    const wrapper = shallow(<VideoBanner />);
    expect(wrapper).toMatchSnapshot();
});

// test for modal opening function?
// handleOpenModal={false}