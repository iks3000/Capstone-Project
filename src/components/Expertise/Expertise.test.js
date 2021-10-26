import React from "react";
import { shallow } from "enzyme";
import Expertise from "./index";

it("should render Expertise component", () => {
  const mockItem = {
    data: [
      {
        date: "2013-2014",
        info: {
          company: "Google",
          job: "Front-end developer / php programmer",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil",
        },
      },
      {
        date: "2012",
        info: {
          company: "Twitter",
          job: "Web developer",
          description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim",
        },
      },
    ],
  };
  expect(shallow(<Expertise {...mockItem} />)).toMatchSnapshot();
});
