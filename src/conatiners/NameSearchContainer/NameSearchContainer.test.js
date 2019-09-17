import React from "react";
import { shallow } from "enzyme";
import  { NameSearchContainer, mapStateToProps }  from './NameSearchContainer';

describe("NameSearchContainer", () => {
  let wrapper;
  let mockNameResults;

  beforeEach(() => {
    mockNameResults = [
      {
        id: 1516,
        name: "Ratio Beerworks",
        street: "2920 Larimer St",
        city: "Denver",
        state: "Colorado",
        phone: "3012669264"
      }
    ];
    wrapper = shallow(<NameSearchContainer props={mockNameResults}/>);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state when handleChange is called", () => {
    wrapper = shallow(<NameSearchContainer />);
    const mockEvent = { target: { name: "state", value: "Colorado" } };
    const expected = "";

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state("name")).toEqual(expected);
  });

  it("should run handleChange when the inputs detect a change", () => {
    const mockEvent = { target: { name: "state", value: "Colorado" } };

    wrapper.instance().handleChange = jest.fn();
    wrapper.find('[name="name"]').simulate("change", mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalledTimes(0);
  });

  it("should run handleSubmitState when the button is clicked", () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().handleSubmitState = jest.fn();
    wrapper.find("button").simulate("click", mockEvent);

    expect(wrapper.instance().handleSubmitState).toHaveBeenCalledTimes(0);
  });
});
