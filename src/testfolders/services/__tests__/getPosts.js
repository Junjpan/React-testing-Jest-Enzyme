import getPosts from '../getPosts';
import axios from 'axios';


//mock out all top level functions, such as get, put,delete and post
//jest.mock('axios');
//automatically use the mock axios from __mocks__
it('calls axios and returns an object',async()=>{
    let response=await getPosts();
   // console.log(response)
    expect(typeof response.data).toEqual('object')
})


//different apporach:

it('Should return an array equal to [{name:"peter"},{name:"Michael"}]',async()=>{
//overwrite the mock axios under the __mocks__folder
// use the jest.mock(...) function-axios.get.mockImplementation() or axios.get.mockImplementationOnce()
//setup
 axios.get.mockImplementation(()=>{
     console.log('getposts')
    return Promise.resolve({data:[{name:"peter"},{name:"Michael"}]});

 })

 //work
 let response=await getPosts()
 
 //assertions/expections
     expect(response.data[0].name).toEqual('peter');
     expect(axios.get).toHaveBeenCalledTimes(2);
     expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts?_limit=10")
     //there are twice because the first test also call the mockaxios under the __mocks__ folder


})