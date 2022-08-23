import React  from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import chalk  from "chalk";
import config from '../config';
import { operationsState } from "./../features/operations/operationsSlice";

export  class apiService { 
  client = axios.create({    
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 350000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      // 'appToken' : localStorage.getItem("appToken"),
      // 'roleIds' : localStorage.getItem("roleIds"),
    }
  });

  
  getRandomApi =  async () => {
  try { 
    
    const url =  "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1";
    const res =    await axios.get(url);      
    return res.data;
  } catch (err) {
    chalk.bgRed.red(err);
    throw new Error(err);
  }  
};

callInitAsync =  async () => {
  try {        
    const url =  process.env.REACT_APP_API_HOST + "todos/1";
    const res =    await axios.get(url);   
    console.log(res.data); 

    return res.data;
  } catch (err) {
    chalk.bgRed.red(err);
    throw new Error(err);
  }  
};
//operations = useSelector(operationsState);
callSearchAsync =  async () => {
  try {     
    debugger;
  console.log(`${process.env.REACT_APP_API_HOST}todos/${this.operations.term}?${this.operations.activeMenuItem}`);
   // const url = `${process.env.REACT_APP_API_HOST}todos/${this.operations.term}?${this.operations.activeMenuItem}`;
   const url =  process.env.REACT_APP_API_HOST + "todos/4";
    const res =    await axios.get(url);      
    return res.data;
  } catch (err) {
    chalk.bgRed.red(err);
    throw new Error(err);
  }  
};
}
