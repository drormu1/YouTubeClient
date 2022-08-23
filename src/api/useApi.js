import React ,{useContext} from 'react';
import axios from "axios";
import chalk  from "chalk";
import config from '../config';

import { useSelector, useDispatch } from "react-redux";
import { userState,saveInitInfo } from "./../features/init/initSlice";
import { operationsState , saveResults} from "./../features/operations/operationsSlice";


export default function useApi(){
     
  const dispatch = useDispatch();  
  const user = useSelector(userState);
  const operations = useSelector(operationsState);
 
  const client = axios.create({    
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 350000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      // 'appToken' : localStorage.getItem("appToken"),
      // 'roleIds' : localStorage.getItem("roleIds"),

    }
  });
 

  // const getRandomApi =  async () => {
  //   debugger;  
  //   try {
  //     console.log('inside getRandomApi');
  //     const url =  "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1";
  //     return  await axios.get(url);      
  //   } catch (err) {
  //     chalk.bgRed.red(err);
  //     throw new Error(err);
  //   }
  // };

  // const callInitAsync = (data) => async (dispatch) => {
  //   try {
  //     console.log('inside axios callSearchAsync');
  //     const url =  process.env.REACT_APP_API_HOST + "todos/1";
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //     dispatch(saveInitInfo(response.data));
  //   } catch (err) {
  //     chalk.bgRed.red(err);
  //     throw new Error(err);
  //   }
  // };

  const callSearchAsync = (data) => async (dispatch) => {
    try {
      console.log('inside axios callSearchAsync');
      const url = `${process.env.REACT_APP_API_HOST}todos/${operations.term}?${operations.activeMenuItem}`;
      const response = await axios.get(url);
      console.log(response.data);
      dispatch(saveResults(response.data));
    } catch (err) {
      chalk.bgRed.red(err);
      throw new Error(err);
    }
  };

  
// Add a request interceptor
client.interceptors.request.use(function (config) {
  
     
  if(config.url === '/search' || config.url === '/init')
  {
    let d = new Date().getMilliseconds();
    //console.log('request SET_LOADING - on',d);
    //loadingDispatch({type:'SET_LOADING', payload:{loading:true,d}});      
  }
  return config;
}, function (error) {
  if(error.config.url === '/search' || error.config.url === '/init')
  {
    //loadingDispatch({type:'SET_LOADING', payload:{loading:false}});
    dispatch({type:'SET_ERROR', payload:{errorMessage:error.response}});
    
  }
  //console.log('set loading - request  off');
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
client.interceptors.response.use(function (response) {
 
  // if(response.config.url === '/search' || response.config.url === '/init')
  // {
  //   loadingDispatch({type:'SET_LOADING', payload:{loading:false}});  
  // }
  let d = new Date().getMilliseconds();
  // console.log('response SET_LOADING off ',d);     
 // loadingDispatch({type:'SET_LOADING', payload:{loading:false , d}});

  //console.log('set loading off');
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
 
  // if(error.config.url === '/search' || error.config.url === '/init')
  // {
   
  //   loadingDispatch({type:'SET_LOADING', payload:{loading:false}});
  //   dispatch({type:'SET_ERROR', payload:{errorMessage:error.response}});
  // }
     //loadingDispatch({type:'SET_LOADING', payload:{loading:false}});
     dispatch({type:'SET_ERROR', payload:{errorMessage:error.response}});


 // dispatch({type:'SET_SERVER_ERROR', payload:error.response}); 
  return Promise.reject(error);
});

  

}


// export const getRandomApi = useApi.getRandomApi;
