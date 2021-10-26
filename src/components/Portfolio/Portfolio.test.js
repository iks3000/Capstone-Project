import React from "react";
import { shallow } from "enzyme";
import Portfolio, { IsotopeContent } from "./index";

it("should render Portfolio component", () => {
  expect(shallow(<Portfolio />)).toMatchSnapshot();
});

it("should render IsotopeContent component", () => {
  expect(shallow(<IsotopeContent />)).toMatchSnapshot();
});

// describe("Filter key", () => {
//   const key = "*";
//   const props = {
//     handleFilterKeyChange: jest.fn(),
//     key,
//   };

//   it("should", () => {
//     const button = shallow(
//       <IsotopeContent {...props}>Increment</IsotopeContent>
//     );
//     button.find(".increment").simulate("click");
//     expect(props.handleFilterKeyChange).toHaveBeenCalledWith("ui");
//   });
// });
