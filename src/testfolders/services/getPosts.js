import axios from 'axios';

export default async ()=>{
   
 let response=await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

               
 return response
}