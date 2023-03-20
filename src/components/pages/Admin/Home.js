import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loading from '../Loadingnow';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const [admin, setAdmin] = useState([])
    const URL = "http://localhost:3000/api"
    const navigate = useNavigate()

    const getAdmin = async () => {
        try {
            let cobaitm = await axios({
                url: `${URL}/admins`,
                method: "GET",
            })

            console.log(cobaitm.data)
            setAdmin(cobaitm.data)
        } catch (err) {
            alert(err)
        }
    }

    const deleteAdmin = id => {
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
                        url: `${URL}/admins/remove/${id}`,
                        method: 'DELETE'
                    })
                    getAdmin()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

            navigate("/admin")
        } catch (err) {
            Swal.fire(
                'Admin net deleted',
                'Fieled to delete admin',
                'error'
            )
        }
    }

    useEffect(() => {
        console.log("useEffect berjalan")
        getAdmin()

    }, [])

    return (
        <>
            <div className="row text-center">
                <h3 className="">Admin Page</h3>
                <p>Lorem ipsum is a dummy text</p>
                <hr />
            </div>

            <div className="row">
                <div className="col-12 p-2">
                    <div className="float-start">
                        <h3>Admin List</h3>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-sm btn-success" to="/admin/register">Create Admin</Link>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th>Admin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin.length !== 0 ?
                                admin.map((adm) => {
                                    const { id, nameAdm, emailAdm, passwordAdm, imageAdm } = adm;
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <img className="img-fluid" src={imageAdm} alt={nameAdm} />
                                                    </div>
                                                    <div className="col-9">
                                                        <h3 className="text-success">{nameAdm}</h3>
                                                        <h5 className="text-primary">Email: {emailAdm}</h5>
                                                        <p>Password: {passwordAdm}</p>
                                                        <small className="badge bg-success">{nameAdm}</small>
                                                        <p>{nameAdm}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-danger" onClick={() => deleteAdmin(id)}>Remove</button>
                                                <Link className="btn btn-sm btn-info" to={`/item/edit/${id}`}>Edit</Link>
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

export default Admin