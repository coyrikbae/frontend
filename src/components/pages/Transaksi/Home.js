import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loadingnow';

const Item = () => {

    const [transaksi, setTransaksi] = useState([])
    const URL = "http://localhost:3000/api"

    const getTransaksi = async () => {
        try {
            let cobatra = await axios({
                url: `${URL}/transaksis`,
                method: "GET",
            })

            console.log(cobatra.data)
            setTransaksi(cobatra.data)
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        console.log("useEffect berjalan")
        getTransaksi()

    }, [])

    return (
        <>
            <div className="row text-center">
                <h3 className="">Transaksi Page</h3>
                <p>Lorem ipsum is a dummy text</p>
                <hr />
            </div>

            <div className="row">
                <div className="col-12 p-2">
                    <div className="float-start">
                        <h3>Transaksi List</h3>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-sm btn-success" to="/transaksi/create">Create Transaksi</Link>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th>Transaksi</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaksi.length !== 0 ?
                                transaksi.map((tra) => {
                                    const { id, admin, customer, tgl_transaksi, total_transaksi } = tra;
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* <img className="img-fluid" src={imageItm} alt={nameItm} /> */}
                                                    </div>
                                                    <div className="col-9">
                                                        <h3 className="text-success">Admin: {admin.nameAdm}</h3>
                                                        <h3 className="text-primary">Customer: {customer.nameCus}</h3>
                                                        <h3 className="text-primary">Rp. {total_transaksi}</h3>
                                                        <h5 className="text-primary">Tanggal: {tgl_transaksi}</h5>
                                                        {/* <p>Stock: {stockItm} pcs</p>
                                                        <small className="badge bg-success">{nameItm}</small>
                                                        <p>{nameItm}</p> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-danger">Remove</button>
                                                <button className="btn btn-sm btn-info">Edit</button>
                                            </td>
                                        </tr>
                                    );
                                }) :
                                <Loading />
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Item