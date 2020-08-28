/* eslint-disable react/forbid-foreign-prop-types */

import checkPropTypes from 'check-prop-types';
import { createStore ,applyMiddleware} from 'redux';
import {middlewares} from  '../src/store';
import rootReducer from '../src/reducers/rootReducer'


export const findByTestAttr=(component,attr)=>{
    const wrapper=component.find(`[data-test='${attr}']`);
    //console.log(wrapper.debug())
    return wrapper
}

export const checkProps=(component,expectedProps)=>{
    const propsErr=checkPropTypes(component.propTypes,expectedProps,'info',component.name);
    return propsErr
}

//create teststore

export const testStore=createStore(
    rootReducer,
    {},
    applyMiddleware(...middlewares)
)

/** 
//there is another way to create a test store or store, if so, put code "const store=testStore()" instead of "const store=testStore" in the integration.spec.js file;

export const testStore=(initialState)=>{
const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore)
return createStoreWithMiddleware(rootReducer,initialState);

at
}*/
 