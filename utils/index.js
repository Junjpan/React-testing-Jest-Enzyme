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

export const testStore=(initialState)=>createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
)

/** 

export const testStore=(initialState)=>{
const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore)
return createStoreWithMiddleware(rootReducer,initialState);

at
}*/
 