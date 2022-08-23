import React, { useState , useEffect} from 'react'
import { Notifications, Menu, SearchOutlined, VideoCall, Apps } from '@mui/icons-material';
import { useSelector,useDispatch} from "react-redux";
import Avatar from '@mui/material/Avatar';
import './Header.css'
import { Link } from 'react-router-dom'

import useApi from './../api/useApi'; 

import {TextField} from '@mui/material';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// or

import {saveTerm,termState ,callSearchAsync} from  "./../features/operations/operationsSlice";
import { userState ,callInitAsync,} from "./../features/init/initSlice";

function Header() {
    
    //const [inputSearch, setInputSearch] = useState('');    
   
    const dispatch = useDispatch();     
    
    const user = useSelector(userState);
    const term = useSelector(termState);
    


    useEffect(() => {                  
            dispatch(callInitAsync());                     
         }     
    ,[user]);
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('callSearchAsync')
          dispatch(callSearchAsync());
        }
    }

    return (
        <div className='header'>
           
             {/* <button onClick={() => dispatch(useApi.callInitAsync())}>GET TODO</button>*/}           
             {/* {process.env.REACT_APP_DEPARTMENT_FOR_LOGO}  */}


            <div className="header__left">
                <Menu />
                <Link to='/'>
                    <img className='header__logo' src="/images/logo.png" alt="" srcSet="" />
                </Link>
                 [{user.role} {user.userId}, ]   *{term??''}*
            </div>
            <div className="header__input">               
               <TextField value={term ?? ''} 
               onChange={(e) =>  dispatch(saveTerm(e.target.value))}
               onKeyDown={handleKeyDown}
                     placeholder={'חיפוש'}
                     type={'text'}
                     margin='normal'
                     fullWidth                     

                     InputProps={{
                        endAdornment: (
                            <IconButton type="submit" aria-label="search">
                            <SearchIcon style={{ fill: "gray" }} />
                          </IconButton>
                        
                        )
                      }}
                />
                
            </div>           
            <div className="header__icons">
                <div className="inactive">
                    <VideoCall className='header__icon' />
                    <Apps className='header__icon' />
                    <Notifications className='header__icon' />
                </div>
                <Avatar alt="Taha" src="https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg" />
            </div>
        </div>
    )
}

export default Header;



    // function getLogoSrc() {  
    //     return `${process.env.REACT_APP_MODDATA_URL}${process.env.REACT_APP_DEPARTMENT_FOR_LOGO}_512.png`;
    //   }
    