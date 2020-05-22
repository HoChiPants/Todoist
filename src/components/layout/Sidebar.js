import React from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
export const Sidebar = () => (
         <div className="sidebar" data-testid="sidebar">
           <ul className="sidebar_generic">
             <li>
               <span>
                 <faInbox />
               </span>
               <span>
                   Inbox
               </span>
             </li>
             <li>
               <span>
                 <FaRegCalendar />
               </span>
               <span>Today</span>
             </li>
             <li>
               <span><FaRegCalendarAlt/></span>
               <span>
                 Next 7 days
               </span>
             </li>
           </ul>
           <div className = "sidebar__middle">
                <span>
                    <FaChevronDown/>

                </span>
                <h2>
                    Projects
                </h2>
           </div>
           <ul className = "disebar__projects">
               Projects will be added here
           </ul>
           Project componenet here
         </div>
       );