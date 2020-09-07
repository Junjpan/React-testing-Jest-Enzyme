
export default {

    //mocks function, it is a fack axios
    get:jest.fn(()=>{
     
        return  Promise.resolve({data:{name:"peter"}})
      
      
    })
}


/**
 *  get:jest.fn((url)=>{
      if(url==='https://jsonplaceholder.typicode.com/posts?_limit=10'){
        return  Promise.resolve({data:{name:"peter"}})
      }
      
    })
 */
//example of the mock module
/**
 * module.exports = {
    get: jest.fn((url) => {
        if (url === '/something') {
            return Promise.resolve({
                data: 'data'
            });
        }
    }),
    post: jest.fn((url) => {
        if (url === '/something') {
            return Promise.resolve({
                data: 'data'
            });
        }
        if (url === '/something2') {
            return Promise.resolve({
                data: 'data2'
            });
        }
    }),
    create: jest.fn(function () {
        return this;
    })
};
 */