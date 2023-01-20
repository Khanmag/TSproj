import React from 'react';
import {NavLink, useMatch} from "react-router-dom";
import './NavBtn.css'

interface NavBtnProps {
    path: string,
    name: string,
}

const NavBtn:React.FC<NavBtnProps> = ({path, name}) => {
    return (
        <div  className={'nav_btn'}>
            <NavLink className={({isActive}) => isActive ? 'nav_btn_active' : ''}
                     to={path}
            >
                {name}
            </NavLink>
        </div>

    );
};

export default NavBtn;

