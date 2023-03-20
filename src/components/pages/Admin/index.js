import React from 'react';
import { Outlet } from 'react-router-dom';

import Home from "./Home";
import Create from "./Create";
import Update from "./Edit";

const Admin = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export {
    Admin as AdminHome,
    Home as AdminList,
    Create as CreateAdmin,
    Update as UpdateAdmin
}
