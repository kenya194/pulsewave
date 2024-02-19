import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './sidebarButton.css'
import { IconContext } from 'react-icons';

export default function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive? "btn__body active" : "btn__body";

  return (
    <Link to ={props.to}>
        <div className={btnClass}>
        <IconContext.Provider value={{size:"24px", className:'btn__icon'}}>
        {props.icon}
        <p className='btn__title'>{props.title}</p>
        </IconContext.Provider>
        </div>
    </Link>
    
  );
}
