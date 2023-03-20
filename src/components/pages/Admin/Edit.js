import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let { id } = useParams()
    const URL = 'http://localhost:3000/api'
    const navigate = useNavigate()

    const [nameAdm, setNameAdm] = useState("")
    const [emailAdm, setEmailAdm] = useState("")
    const [passwordAdm, setPasswordAdm] = useState("")
    const [imageAdm, setImageAdm] = useState("")

    const editAdmin = async () => {

        try {
            let temp = await axios({
                url: `${URL}/Admins/edit/${id}`,
                method: "PUT",
                data: {
                    nameAdm,
                    emailAdm: +emailAdm,
                    passwordAdm: +passwordAdm,

                }
            })
            console.log(temp)
            setNameAdm("")
            setEmailAdm("")
            setPasswordAdm("")

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

    return (
        <>
            <div className='row'>
                <div className='col-12 text-center p-2'>
                    <h3>Edit Admin</h3>
                </div>
                <div className="col-6 form-submit mx-auto">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        editAdmin();
                    }}>
                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                value={nameAdm}
                                onChange={e => setNameAdm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Name" />
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                value={emailAdm}
                                onChange={e => setEmailAdm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Email" />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
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
                                placeholder="Input Image" />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-success w-100"
                            // onClick={editItem}
                            >Edit Customer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit