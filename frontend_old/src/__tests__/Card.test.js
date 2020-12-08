import React from "react";
import { shallow, mount } from "enzyme";
import { Card } from "../features/card/Card";

describe("Card component", () => {
  it("renders Card", () => {
    let data = {
      Name: "test name",
      Price: 12.92,
    };
    const wrapper = shallow(<Card data={data} />);
    const title = "test name";
    expect(wrapper.contains(title)).toBe(true);
  });
});
