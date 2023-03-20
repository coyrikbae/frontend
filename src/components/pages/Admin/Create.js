import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const URL = 'http://localhost:3000/api'
    const navigate = useNavigate()

    const [nameAdm, setNameAdm] = useState("")
    const [emailAdm, setEmailAdm] = useState("")
    const [passwordAdm, setPasswordAdm] = useState("")
    const [imageAdm, setImageAdm] = useState("")

    const addAdmin = async () => {
        try {
            await axios({
                url: `${URL}/admins/register`,
                method: "POST",
                data: {
                    nameAdm,
                    emailAdm,
                    passwordAdm,
                    imageAdm,
                }
            })
            setNameAdm("")
            setEmailAdm("")
            setPasswordAdm("")
            setImageAdm("")
            Swal.fire(
                'Admin created',
                'Admin has been added to the list',
                'success'
            )

            navigate("/admin")
        } catch (err) {
            alert(err)
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        addAdmin()
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 text-center p-2'>
                    <h3>Create Admin</h3>
                </div>
                <div className="col-6 form-submit mx-auto">
                    <form>
                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                value={nameAdm}
                                onChange={e => setNameAdm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input name" />
                        </div>
                        <div className="mb-3">
                            <label>Stock</label>
                            <input
                                value={emailAdm}
                                onChange={e => setEmailAdm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Email" />
                        </div>
                        <div className="mb-3">
                            <label>Price</label>
                            <input
                                value={passwordAdm}
                                onChange={e => setPasswordAdm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Password" />
                        </div>
                        <div className="mb-3">
                            <label>Image</label>
                            <input
                                value={imageAdm}
                                onChange={e => setImageAdm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input image's url" />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-success w-100"
                                onClick={submitHandler}
                            >Add Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create