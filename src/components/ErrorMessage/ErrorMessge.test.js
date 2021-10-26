import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./index";

it("should render ErrorMessage component", () => {
    expect(shallow(<ErrorMessage />)).toMatchSnapshot();
});
