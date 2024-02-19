import React from 'react'
import { Link } from 'react-router-dom';
import './sidebarButton.css'
import { IconContext } from 'react-icons';

export default function SidebarButton(props) {
    
  return (
    <Link to ={props.to}>
        <div className='btn__body'>
        <IconContext.Provider value={{size:"24px", className:'btn__icon'}}>
        {props.icon}
        <p className='btn__title'>{props.title}</p>
        </IconContext.Provider>
        </div>
    </Link>
    
  );
}
