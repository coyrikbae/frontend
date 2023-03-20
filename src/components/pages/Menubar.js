import React from 'react';
// import { FaStore } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Menubar = ({ loginHandler }) => {

    const logoutHandler = () => {
        localStorage.clear()
        loginHandler(false)
    }

    return (
        <div className='container'>
            <Link className='navbar-brand logo' to="/">
                Toko-Micro
            </Link>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/item">Item</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/admin">Admin</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/customer">Customer</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/transaksi">Transaksi</Link>
                </li>
            </ul>
            <ul className='ms-auto'>
                <button onClick={() => logoutHandler()} className="btn btn-sm btn-success">
                    Logout
                </button>
            </ul>
        </div>
    )
}

export default Menubar