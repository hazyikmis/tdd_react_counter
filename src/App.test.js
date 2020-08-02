import React from "react";
import { render } from "@testing-library/react";
//import App from "./App";

import Counter from "./Counter";

import { shallow } from "enzyme";
/*
//The part below moved to setupTest.js
//So, no need to configure Enzyme in every test

//enzyme config - start
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
//enzyme config - finish
*/
describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  /*
  //it("renders the title of counter", () => {
  test("renders the title of counter", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/This is counter app/i);
    expect(linkElement).toBeInTheDocument();
  });
*/
  //same test with above, but more descriptive
  test("renders the title of counter - with enzyme", () => {
    //const wrapper = shallow(<App />);
    //console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with text of 'Increment'", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
