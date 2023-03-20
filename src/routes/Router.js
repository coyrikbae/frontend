import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Item from "../views/Item";
import Login from "../views/Login";
import Register from "../views/Register";

const Router = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/item" element={<Item />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default Router
