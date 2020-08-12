import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../../utils/index';

const setUp=(props={})=>{
    const component=shallow(<Header {...props} />);
    return component
}



describe('Header component',()=>{

    let component;
    //beforeEach run each single test
    beforeEach(()=>{
        component=setUp()
    })

    it('should render only 1 data-test attribute is called headerComponent',()=>{

       //console.log(component.debug());
       //test if have only one class and its name is headerComponent

        const wrapper=findByTestAttr(component,"headerComponent")
        expect(wrapper.length).toBe(1)
    });

    it('should render a logo',()=>{

         const logo=findByTestAttr(component,"logoImg");
         expect(logo.length).toBe(1)

    })
})