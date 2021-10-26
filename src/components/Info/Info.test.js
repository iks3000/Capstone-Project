import { shallow } from "enzyme";
import Info from "./index";
it("should render Inner component", () => {
  const mockItem = {
    text: "test",
  };
  expect(shallow(<Info {...mockItem} />)).toMatchSnapshot();
});
