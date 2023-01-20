import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import './global.css'
import NavBtn from "./components/bottons/NavBtn";

const Layout = () => {
    return (
        <>
            <header>
                <NavBtn path={'/users'} name={'USERS'}/>
                <NavBtn path={'/todos'} name={'TO DO'}/>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};

export default Layout;