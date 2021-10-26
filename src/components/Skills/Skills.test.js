import React from "react";
import { shallow } from "enzyme";
import Skills from "./index";
import Button from "../Button/index";

it("should render Skills component", () => {
    expect(shallow(<Skills />)).toMatchSnapshot();
});

const skills = [{
    id: 1,
    name: "React",
    range: 80,
}, ];

test("we should have skills", () => {
    expect(skills).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ id: 1, name: "React", range: 80 }),
        ])
    );
});

describe("<TestComponent />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow( <Skills /> );
    });

    it("has the initial state isOpen false", () => {
        expect(wrapper.state()).toEqual({ isOpen: false });
    });

    describe("should open skills", () => {
        it("setting iOpen to true on click", () => {
            wrapper.find(Button).props().onClick();
            expect(wrapper.state()).toEqual({ isOpen: true });
        });
    });


    describe("should close skills", () => {
        it("setting isOpen to false on click", () => {
            wrapper.find(Button).props().onClick();
            expect(wrapper.state()).toEqual({ isOpen: false });
        });
    });
});

