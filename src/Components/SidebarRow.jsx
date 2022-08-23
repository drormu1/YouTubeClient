import { ConnectedTvOutlined } from '@mui/icons-material'
import React from 'react'
import './SidebarRow.css'

import { useSelector,useDispatch} from "react-redux";
import {saveActiveMenuItem,termState } from  "./../features/operations/operationsSlice";


function SidebarRow({selected, title, Icon,id}) {

  
  const dispatch = useDispatch();     
  const term = useSelector(termState);


  return (
     <div className={`sidebarRow ${selected && 'selected'}`} onClick={()=>dispatch(saveActiveMenuItem(id))} >
        <Icon className='sidebarRow__icon'/>
        <span className='sidebarRow__title'>{title}</span>
    </div>
  )
}

export default SidebarRow