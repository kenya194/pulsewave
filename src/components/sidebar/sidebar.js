import React from 'react'
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdLibraryMusic } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { HiTrendingUp } from "react-icons/hi";
import { MdDynamicFeed } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
    <div className='sidebar__container'>
    <img src='https://i.pinimg.com/236x/d9/45/fd/d945fd6872babf46c9f00a295b76c4d8.jpg' className='profile__img'alt='profile' />
    <div>
    <SidebarButton title='Feed' to='/feed' icon={<MdDynamicFeed />}/>
    <SidebarButton title='Trending' to='/trending' icon={<HiTrendingUp />}/>
    <SidebarButton title='Player' to='/player' icon={<TbPlayerSkipForwardFilled />}/>
    <SidebarButton title='Favorites' to='/favorites' icon={<MdFavorite />}/>
    <SidebarButton title='Library' to='/' icon={<MdLibraryMusic />}/>
    </div>
    <SidebarButton title='SignOut' to='' icon={<FaSignOutAlt />}/>
    </div>
   

</>
  )
}
