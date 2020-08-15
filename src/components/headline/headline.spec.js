import React from "react";
import { shallow } from "enzyme";

import Headline from "./index";

import { findByTestAttr,checkProps } from "./../../../utils/index";


const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("HeadLine component", () => {

  describe('Check PropTypes',()=>{
    
    it('Should not throw an error',()=>{
      const expectedProps={
        header:"test header",
        desc:"test desc",
        tempArr:[{
          fName:"test fName",
          lName:"test lName",
          email:'test@gmail.com',
          age:50,
          onlineStatus:false
        }]
      };

      const propsErr=checkProps(Headline,expectedProps);

      expect(propsErr).toBeUndefined()
    });
    
  })

  describe("Have props", () => {
      let component
    beforeEach(() => {
      let props = {
        header: "testing",
        desc: "testing header",
      };
      component = setUp(props);
    });

    it("should render div with headlinecomponent", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("should render h1 with 'header'",()=>{
        const wrapper=findByTestAttr(component,"header");
        expect(wrapper.length).toBe(1)
    });

    it("should render section with 'desc'",()=>{
        const wrapper=findByTestAttr(component,"desc");
        expect(wrapper.length).toBe(1)
    });

  });

  describe("Have No Props", () => {
      let component=setUp();

      it('should not have component render',()=>{
        let wrapper=findByTestAttr(component,"HeadlineComponent");

        expect(wrapper.length).toBe(0)
      })

  });
});
