import React from "react";
import { shallow } from "enzyme";
import ScrollToTop from "./index";

it("should render ScrollToTop component", () => {
  expect(shallow(<ScrollToTop />)).toMatchSnapshot();
});

