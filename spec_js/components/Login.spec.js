import React from "react";
import { shallow, mount } from "enzyme";
import Login from "../../app/javascript/components/Login";

describe("Login Component", () => {
  const wrapper = shallow(<Login getUserDetails={jest.fn()} />);

  it("should render proper html", () => {
    expect(wrapper.html()).toBe(
      '<div class="user-screen"><form><label class="form-label">Enter Name:</label><input type="text" class="form-input" name="userName" required=""/><button type="submit" class="form-button submit-button">Submit</button></form></div>'
    );
  });
});

describe("function", () => {
  let handleSubmit;
  beforeAll(() => {
    handleSubmit = jest
      .spyOn(Login.prototype, "handleSubmit")
      .mockImplementation(() => true);
  });
  afterAll(() => {
    Login.prototype.handleSubmit.mockRestore();
  });
  const wrapper1 = mount(<Login />);
  it("should call handleSubmit", () => {
    const btn = wrapper1.find(".form-button").at(0);
    console.log(handleSubmit);
    btn.simulate("click");
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
