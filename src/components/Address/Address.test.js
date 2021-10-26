import React from "react";
import { shallow } from "enzyme";
import Address from "./index";

it("should render Address component", () => {
  expect(shallow(<Address />)).toMatchSnapshot();
});
