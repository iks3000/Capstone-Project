import React from "react";
import { mount, shallow } from "enzyme";
import Inner from "./index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import educationReducer, {fetchEducations} from "../../app/features/education/educationSlice";
import { StaticRouter } from "react-router";

it("should render Inner component", () => {
  expect(shallow(<Inner />)).toMatchSnapshot();
});

describe("<Inner /> unit test", () => {
  const getWrapper = (mockStore = createStore(educationReducer, {})) =>
    mount(
      <Provider store={mockStore}>
        <StaticRouter location="someLocation">
          <Inner />
        </StaticRouter>
      </Provider>
    );
  it("should dispatch the correct action on button click", () => {
    const mockStore = createStore(educationReducer, {});
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find("button").simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(fetchEducations());
  });
});
