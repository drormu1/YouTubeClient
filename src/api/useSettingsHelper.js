import {  useContext } from 'react';
import axios from "axios";
import chalk  from "chalk";
import SearchContext from '../state/context';
import config from '../config';

export default function useSettingsHelper(){
  
  
  const  translateField =(field) => {      
               
  //    return ui.some(f=>f.key === field) ?  ui.find(f=>f.key === field).title : field;
      
  }
  
    
  
  return {translateField}; 
}

