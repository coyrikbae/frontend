import React from 'react';
import { Outlet } from 'react-router-dom';

import Home from "./Home";
import Create from "./Create";
import Update from "./Edit";


const Item = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export {
    Item as ItemHome,
    Home as ItemList,
    Create as CreateItem,
    Update as UpdateItem,
}