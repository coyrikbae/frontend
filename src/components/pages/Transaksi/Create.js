import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const URL = 'http://localhost:3000/api'
    const navigate = useNavigate()

    const [idAdm, setIdAdm] = useState("")
    const [idCus, setIdCus] = useState("")
    const [tgl_transaksi, setTglTra] = useState("")
    const [total_transaksi, setTotalTra] = useState("")

    const addItem = async () => {
        try {
            let result = await axios({
                url: `${URL}/transaksis/add`,
                method: "POST",
                data: {
                    idAdm: +idAdm,
                    idCus: +idCus,
                    tgl_transaksi: +tgl_transaksi,
                    total_transaksi: +total_transaksi,
                }
            })
            setIdAdm("")
            setIdCus("")
            setTglTra("")
            setTotalTra("")
            Swal.fire(
                'Transaksi created',
                'Transaksi has been added to the list',
                'success'
            )

            navigate("/transaksi")
        } catch (err) {
            alert(err)
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        addItem()
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 text-center p-2'>
                    <h3>Create Transaksi</h3>
                </div>
                <div className="col-6 form-submit mx-auto">
                    <form>
                        <div className="mb-3">
                            <label>Id Admin</label>
                            <input
                                value={idAdm}
                                onChange={e => setIdAdm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Id Admin" />
                        </div>
                        <div className="mb-3">
                            <label>Id Cus</label>
                            <input
                                value={idCus}
                                onChange={e => setIdCus(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Id Customer" />
                        </div>
                        <div className="mb-3">
                            <label>Tanggal Transaksi</label>
                            <input
                                value={tgl_transaksi}
                                onChange={e => setTglTra(e.target.value)}
                                type="date"
                                className="form-control"
                                placeholder="Input Tanggal Transaksi" />
                        </div>
                        <div className="mb-3">
                            <label>Total Transaksi</label>
                            <input
                                value={total_transaksi}
                                onChange={e => setTotalTra(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Total Transaksi" />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-success w-100"
                                onClick={submitHandler}
                            >Add Transaksi</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create