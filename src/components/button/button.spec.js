import React from 'react';
import { findByTestAttr,checkProps } from './../../../utils/index';
import SharedButton from './index';
import {shallow} from 'enzyme';


describe('ShareButton Component',()=>{
  
    describe('Checking PropType',()=>{
        it('Should not throw an error',()=>{
            const expectedProps={
                buttonText:"example button",
                emitEvent:()=>{}
            };

            const propsError=checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Render',()=>{
        let component; 
        let mockFunc;
        
        beforeEach(()=>{
            mockFunc=jest.fn();
            const props={
                buttonText:"example button",
                //simulate events (reference:https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html)
                emitEvent:mockFunc
            }
            component=shallow(<SharedButton {...props} />)
        })

        it('Should render a button',()=>{
            const button=findByTestAttr(component,'sharebutton');
            expect(button.length).toBe(1)
        })

        it('Should emit callback on a click event',()=>{
            const button=findByTestAttr(component,'sharebutton');
            button.simulate('click');
            button.simulate('click');
            const callback=mockFunc.mock.calls.length;
            expect(callback).toBe(2)

        })

    })


})
