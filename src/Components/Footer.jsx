import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material';
import './Footer.css'

function Footer() {
    
    //const [inputSearch, setInputSearch] = useState('');    
   
    return (
            
          <AppBar className="footer" position="static"  sx={{ bgcolor: "#f5f5f5" ,color:"darkgray"  }} >                                       
                <Typography variant="subtitle1"   align="center" >
                פותח  על ידי אגף תקשוב ומערכות מידע 2022
                </Typography>
           
            </AppBar>
    
    )
}

export default Footer;
