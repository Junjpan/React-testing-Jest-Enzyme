import moxios from "moxios";
import { testStore } from "./../../utils/index";
import { fetchPosts } from "./../actions/index";

describe("fetchPost actions", () => {

  beforeEach(() => {
    moxios.install();
  });
  
  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title1",
        body: "Some text",
      },
      {
        title: "Example title2",
        body: "Some text",
      },
      {
        title: "Example title3",
        body: "Some text",
      },
    ];

     const store=testStore({});
  
     //mock response
   moxios.wait(()=>{
         const request=moxios.requests.mostRecent();
         request.respondWith({
             status:200,
             response:expectedState
         })
         
     });
     
     return store.dispatch(fetchPosts())
                 .then(()=>{
                     const newState=store.getState();
                     expect(newState.postReducer).toBe(expectedState)
                 })
  });
});

//since I build a new file "axios.js" for mocking axios which is under the  __mocks__folder, this test run the mocks axios from that folder instead run the moxios here.
//becaue of that the test failed, however, I would like to keep this test because it show another appoarch to mock axios
