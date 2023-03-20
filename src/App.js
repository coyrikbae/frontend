import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ItemHome, ItemList, CreateItem, UpdateItem } from './components/pages/Item';
import { AdminHome, AdminList, CreateAdmin, UpdateAdmin } from './components/pages/Admin';
import { CustomerHome, CustomerList, CreateCustomer, UpdateCustomer } from './components/pages/Customer';
import { TransaksiHome, TransaksiList, CreateTransaksi } from './components/pages/Transaksi';

import Menubar from './components/pages/Menubar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginHandler = (data) => {
    setIsLoggedIn(data)
  }

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }

  }, [])

  return (
    <BrowserRouter>
      <div className="container-fluid">
        {
          isLoggedIn ?
            <>
              <Menubar />
              <Routes>
                <Route path="" element={<Home />} ></Route>
                <Route path="item" element={<ItemHome />} >
                  <Route path="" element={<ItemList />} />
                  <Route path="create" element={<CreateItem />} />
                  <Route path="edit/:id" element={<UpdateItem />} />
                </Route>
                <Route path="admin" element={<AdminHome />} >
                  <Route path="" element={<AdminList />} />
                  <Route path="register" element={<CreateAdmin />} />
                  <Route path="edit/:id" element={<UpdateAdmin />} />
                </Route>
                <Route path="customer" element={<CustomerHome />} >
                  <Route path="" element={<CustomerList />} />
                  <Route path="create" element={<CreateCustomer />} />
                  <Route path="edit/:id" element={<UpdateCustomer />} />
                </Route>
                <Route path="transaksi" element={<TransaksiHome />} >
                  <Route path="" element={<TransaksiList />} />
                  <Route path="create" element={<CreateTransaksi />} />
                </Route>
              </Routes>
            </> :
            <Login isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
        }
      </div>
    </BrowserRouter>
  )
}

export default App;