import type from './types';
import axios from 'axios';

export const fetchPosts=()=>async (dispatch)=>{

    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
               .then((res)=>{
                dispatch({type:type.GET_POSTS,payload:res.data})
               })
               .catch(err=>{throw err})

}