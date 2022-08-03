import React from 'react';
import {Outlet} from 'react-router-dom'
import {Header, Theme} from "../../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Theme/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};