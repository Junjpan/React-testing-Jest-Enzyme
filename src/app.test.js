import React from "react";
import App from "./App";
import { shallow} from "enzyme";
import { findByTestAttr, testStore } from "./../utils/index";



const setup = (initialState = {}) => {
  const store = testStore(initialState);
  //const component = mount(<Provider store={store}><App  /></Provider>);
  //you can use this way, however you can not get the instance of the App component
  //also, you can not get the instance of stateless component only class component.
  const component=shallow(<App store={store} />).childAt(0).dive();
  //
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
  });

  it('toggleState Method should update the hidBtn state ',()=>{
    const classInstance=component.instance();
   classInstance.toggleState();
   //console.log(classInstance.state)
   const newState=classInstance.state.hidBtn;
   
   expect(newState).toBe(true)
  })

  it('addOne method should update the value by one',()=>{
    const classInstance=component.instance();
    const newValue=classInstance.addOne(2);
    expect(newValue).toBe(3)
  })
});
