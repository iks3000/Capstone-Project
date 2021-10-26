import React from "react";
import { shallow } from "enzyme";
import Box from "./index";

it("should render Box component", () => {
  expect(shallow(<Box />)).toMatchSnapshot();
});
