import React from "react";
import { shallow, mount } from "enzyme";
import Reset from "../../app/javascript/components/ResetBoard";

describe("Reset Component", () => {
  const mockFunction = jest.fn();
  //   const wrapper = shallow(<Reset handleBoardReset={mockFunction.bind(this)} />);
  const wrapper = shallow(<Reset />);
  it("Should contain submit-reset class", () => {
    console.log(
      "Writing output ======>",
      wrapper.find(".submit-reset").hasClass("submit-reset")
    );
    expect(wrapper.find(".submit-reset")).to.equal(true);
  });
});
