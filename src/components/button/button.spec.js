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
        
        beforeEach(()=>{
            const props={
                buttonText:"example button",
                emitEvent:()=>{}
            }
            component=shallow(<SharedButton {...props} />)
        })

        it('Should render a button',()=>{
            const button=findByTestAttr(component,'sharebutton');
            expect(button.length).toBe(1)
        })

    })
})
