import { shallow } from "enzyme";
import Home from ".";
it("should render Inner component", () => {
  expect(shallow(<Home />)).toMatchSnapshot();
});
