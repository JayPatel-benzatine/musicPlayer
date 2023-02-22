import React, { useEffect } from 'react'
import './btn.css'
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';


const SidebarBtn = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const btnClass = isActive ? "btn-body active" : "btn-body";

    const logout = () => {
        if (props.title === 'Sign-Out') {
            console.log('we');
            localStorage.removeItem('token')
        }
    }

    return (
        <div>
            <Link to={props.to}>
                <div className={btnClass}>
                    <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
                        {props.icon}
                        <p className="btn-title">{props.title}</p>
                    </IconContext.Provider>
                </div>
            </Link>
                        
        </div>
    )
}

export default SidebarBtn