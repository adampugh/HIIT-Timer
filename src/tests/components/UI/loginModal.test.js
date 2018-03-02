import React from "react";
import { shallow } from "enzyme"; 

import LoginModal from "../../../components/UI/loginModal";

test("should render loginModal correctly", () => {
    const wrapper = shallow(<LoginModal />);
    expect(wrapper).toMatchSnapshot();
});