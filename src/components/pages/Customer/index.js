import React from 'react';
import { Outlet } from 'react-router-dom';

import Home from "./Home";
import Create from "./Create";
import Update from "./Edit";


const Customer = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export {
    Customer as CustomerHome,
    Home as CustomerList,
    Create as CreateCustomer,
    Update as UpdateCustomer,
}