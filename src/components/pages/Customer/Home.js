import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loading from '../Loadingnow';
import { useNavigate } from 'react-router-dom';

const Customer = () => {

    const [customer, setCustomer] = useState([])
    const URL = "http://localhost:3000/api"
    const navigate = useNavigate()

    const getCustomer = async () => {
        try {
            let cobaitm = await axios({
                url: `${URL}/customers`,
                method: "GET",
            })

            console.log(cobaitm.data)
            setCustomer(cobaitm.data)
        } catch (err) {
            alert(err)
        }
    }

    const deleteCustomer = id => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, destroy it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios({
                        url: `${URL}/customers/remove/${id}`,
                        method: 'DELETE'
                    })
                    getCustomer()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

            navigate("/customer")
        } catch (err) {
            Swal.fire(
                'Customer net deleted',
                'Fieled to delete customer',
                'error'
            )
        }
    }

    useEffect(() => {
        console.log("useEffect berjalan")
        getCustomer()

    }, [])

    return (
        <>
            <div className="row text-center">
                <h3 className="">Customer Page</h3>
                <p>Lorem ipsum is a dummy text</p>
                <hr />
            </div>

            <div className="row">
                <div className="col-12 p-2">
                    <div className="float-start">
                        <h3>Customer List</h3>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-sm btn-success" to="/customer/create">Create Customer</Link>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.length !== 0 ?
                                customer.map((cus) => {
                                    const { id, nameCus, alamatCus, tlpCus } = cus;
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* <img className="img-fluid" src={imageCus} alt={nameCus} /> */}
                                                    </div>
                                                    <div className="col-9">
                                                        <h3 className="text-success">{nameCus}</h3>
                                                        <h5 className="text-primary">Tlp: {tlpCus}</h5>
                                                        <p>Alamat: {alamatCus}</p>
                                                        <small className="badge bg-success">{nameCus}</small>
                                                        <p>{nameCus}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-danger" onClick={() => deleteCustomer(id)}>Remove</button>
                                                <Link className="btn btn-sm btn-info" to={`/customer/edit/${id}`}>Edit</Link>
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

export default Customer