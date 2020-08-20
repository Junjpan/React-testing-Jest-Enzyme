//Use TDD appoach
import {types} from '../../actions/types';
import PostReducer from './reducer';


describe("Test PostReducer",()=>{


  it('Should render a new state if receive type',()=>{
      const newPost=[{title:"test1"},{title:"test2"}];
      const newState=PostReducer(undefined,{type:types.GET_POSTS,payload:newPost})
      expect(newState).toEqual(newPost)
  })

  it('Should render a initial state',()=>{
    const newState=PostReducer(undefined,{type:"testing"})
    expect(newState).toEqual([])
})

})