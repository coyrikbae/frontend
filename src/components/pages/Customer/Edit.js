import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let { id } = useParams()
    const URL = 'http://localhost:3000/api'
    const navigate = useNavigate()

    const [nameCus, setNameCus] = useState("")
    const [alamatCus, setAlamatCus] = useState("")
    const [tlpCus, setTlpCus] = useState("")

    const editCustomer = async () => {

        try {
            let temp = await axios({
                url: `${URL}/customers/edit/${id}`,
                method: "PUT",
                data: {
                    nameCus,
                    alamatCus: +alamatCus,
                    tlpCus: +tlpCus,

                }
            })
            console.log(temp)
            setNameCus("")
            setAlamatCus("")
            setTlpCus("")

            Swal.fire(
                'Customer created',
                'Customer has been added to the list',
                'success'
            )

            navigate("/customer")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 text-center p-2'>
                    <h3>Edit Customer</h3>
                </div>
                <div className="col-6 form-submit mx-auto">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        editCustomer();
                    }}>
                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                value={nameCus}
                                onChange={e => setNameCus(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Name" />
                        </div>
                        <div className="mb-3">
                            <label>Alamat</label>
                            <input
                                value={alamatCus}
                                onChange={e => setAlamatCus(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Alamat" />
                        </div>
                        <div className="mb-3">
                            <label>Telepon</label>
                            <input
                                value={tlpCus}
                                onChange={e => setTlpCus(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Telepon" />
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