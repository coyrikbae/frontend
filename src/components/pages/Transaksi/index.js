import React from 'react';
import { Outlet } from 'react-router-dom';

import Home from "./Home";
import Create from "./Create";


const Transaksi = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export {
    Transaksi as TransaksiHome,
    Home as TransaksiList,
    Create as CreateTransaksi
}