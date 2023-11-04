import icons from '../icons/iconslist';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
const SidebarLink =({isOpen,title,url,Icons})=>{
   
return(
    <li className="mb-4">
    <NavLink onClick={()=>{}} to={url} className={`flex items-center justify-center gap-2 hover:bg-gray-600`} >
      {isOpen?(
       <><Icons/><span >{title}</span></>
      ):(<Icons/>)}
    </NavLink>
  </li>
)
}
const Sidemenu = () => {
      const [isOpen, setIsOpen] = useState(false);
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
      return (
        <aside
        className={`fixed top-0 left-0 h-full z-[100]  transition-all duration-300 ease-in-out ${
          isOpen ? 'w-48' : 'w-12'
        } bg-gray-800 text-white`}
      >
        <div className="flex flex-col h-full">
          {/* Sidemenu Toggle Button */}
          <button
            className="p-4 focus:outline-none focus:bg-gray-600"
            onClick={toggleSidebar}
          >
            {isOpen ? (<icons.cross/>) : (<icons.hamgurger/>)}
          </button>
          {/* Sidemenu Content */}
          <nav className="flex-grow py-4 px-2">
            <ul >
                <SidebarLink  Icons={icons.dashboard} title='Home' url ='/' isOpen={isOpen}/>
                <SidebarLink  Icons={icons.create}  title = 'Contact us' url = '/contact' isOpen={isOpen}/>
                <SidebarLink  Icons={icons.users} title='Portfolio' url = '/portfolio' isOpen={isOpen}/>
            </ul>
          </nav>
        </div>
      </aside>
    );
  };
export default Sidemenu