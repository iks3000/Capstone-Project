import React from "react";
import { shallow } from "enzyme";
import Spinner from "./index";

it("should render Spinner component", () => {
    expect(shallow( <Spinner /> )).toMatchSnapshot();
});