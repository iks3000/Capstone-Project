import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
