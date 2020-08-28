import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../utils/index";
import MyListItem from "./index";

describe("MylistItem component", () => {

    const expectedProp = {
        title: "test example",
        desc: "my test list description",
      };

  describe("checking PropTypes", () => {
    it("Should not render an error", () => {
     
      let error = checkProps(MyListItem, expectedProp);
      expect(error).toBeUndefined();
    });
  });
  
  describe("MylistItem Component render",()=>{

    let component;

    beforeEach(()=>{        
        component=shallow(<MyListItem {...expectedProp} />);
    })

    it('Should render a component without error',()=>{
        const wrapper=findByTestAttr(component,"mylistitem");
        expect(wrapper.length).toBe(1);
    });

    it('Should render a title',()=>{
        const title=findByTestAttr(component,'itemTitle');
       expect(title.exists()).toBe(true);
        expect(title.text()).toEqual(expectedProp.title)

    });

    it('Should render a desc',()=>{
      const desc=findByTestAttr(component,'itemdisc');
      expect(desc.exists()).toBe(true);
      expect(desc.text()).toEqual(expectedProp.desc)
    })

  })

  describe('Should not render component',()=>{
   
      let  component=shallow(<MyListItem disc="testing" />);

    it('Should not render the component',()=>{
      const wrapper=findByTestAttr(component,"mylistitem");
      expect(wrapper.length).toBe(0)
    })
  })
  
});
