import React from "react";
import App from "./App";
import {Provider} from 'react-redux';
import { mount} from "enzyme";
import { findByTestAttr, testStore } from "./../utils/index";



const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const component = mount(<Provider store={store}><App  /></Provider>);
  console.log(component.debug())
  return component;
};

describe("App Component", () => {
  let component;

  beforeEach(() => {
    const initialstate = {
      postReducer: [
        { title: "Example title1", body: "some text" },
        { title: "Example title2", body: "some text" },
        { title: "Example title3", body: "some text" },
      ],
    };
    component=setup(initialstate);
  });

  it('Should render without errors',()=>{
    let wrapper=findByTestAttr(component,'appComponent');
    expect(wrapper.length).toBe(1)
  })
});
