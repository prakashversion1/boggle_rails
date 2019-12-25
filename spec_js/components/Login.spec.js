import React from "react";
import { shallow } from "enzyme";
import Login from "../../app/javascript/components/Login";

describe("Login Component", () => {
  const wrapper = shallow(<Login />);

  it("should render proper html", () => {
    expect(wrapper.html()).toBe(
      '<div class="user-screen"><form><label class="form-label">Enter Name:</label><input type="text" class="form-input" name="userName" required=""/><button type="submit" class="form-button submit-button">Submit</button></form></div>'
    );
  });
});
