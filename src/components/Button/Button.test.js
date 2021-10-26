import React from "react";
import { shallow } from "enzyme";
import Button from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

it("should render Button component", () => {
  const mockItem = {
    icon: <FontAwesomeIcon className="go-home-ico" icon={faChevronLeft} />,
    text: "Click",
    onClick: () => {},
    disabled: true || false,
    type: "button" || "submit",
    className: "button-disabled" | "button",
  };
  expect(shallow(<Button {...mockItem} />)).toMatchSnapshot();
});

describe("Test Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
