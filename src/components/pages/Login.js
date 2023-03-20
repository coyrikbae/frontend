import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


const Login = (props) => {

    const { isLoggedIn, loginHandler } = props
    // const [loggedIn, setLoggedIn] = useState(isLoggedIn)
    const loginHandlerBtn = () => {
        console.log('loginHandler')
        loginHandler(true)
        // localStorage.setItem('access_token', 'Meledagh!')
    }

    const [loginForm, setLoginForm] = useState({
        emailAdm: "",
        passwordAdm: "",
    })

    const loginSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            let result = await axios({
                url: "http://localhost:3000/api/admins/login",
                method: "POST",
                data: loginForm,
            })

            localStorage.setItem("access_token", result.data)
            loginHandler(true)
        } catch (err) {
            Swal.fire(
                "Login field",
                "Can't login, please try again",
                "error"
            )
        }
    }

    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center mx-auto'>
            <div className='shadow rounded p-3 w-50 border'>
                <form>
                    <div className='mb-3'>
                        <label>Email</label>
                        <input
                            onChange={(e) => setLoginForm({
                                ...loginForm,
                                emailAdm: e.target.value,
                            })}
                            className='form-control'
                            type='text'
                            placeholder='email' />
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input
                            onChange={(e) => setLoginForm({
                                ...loginForm,
                                passwordAdm: e.target.value,
                            })}
                            className='form-control'
                            type='text'
                            placeholder='password' />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <button onClick={loginSubmitHandler} className="w-50 btn btn-sm btn-success">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
