import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loading from '../Loadingnow';
import { useNavigate } from 'react-router-dom';

const Item = () => {

    const [item, setItem] = useState([])
    const URL = "http://localhost:3000/api"
    const navigate = useNavigate()

    const getItem = async () => {
        try {
            let cobaitm = await axios({
                url: `${URL}/items`,
                method: "GET",
            })

            console.log(cobaitm.data)
            setItem(cobaitm.data)
        } catch (err) {
            alert(err)
        }
    }

    const deleteItem = id => {
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
                        url: `${URL}/items/remove/${id}`,
                        method: 'DELETE'
                    })
                    getItem()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

            navigate("/item")
        } catch (err) {
            Swal.fire(
                'Item net deleted',
                'Fieled to delete item',
                'error'
            )
        }
    }

    useEffect(() => {
        console.log("useEffect berjalan")
        getItem()

    }, [])

    return (
        <>
            <div className="row text-center">
                <h3 className="">Item Page</h3>
                <p>Lorem ipsum is a dummy text</p>
                <hr />
            </div>

            <div className="row">
                <div className="col-12 p-2">
                    <div className="float-start">
                        <h3>Item List</h3>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-sm btn-success" to="/item/create">Create Item</Link>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.length !== 0 ?
                                item.map((itm) => {
                                    const { id, nameItm, stockItm, priceItm, imageItm } = itm;
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <img className="img-fluid" src={imageItm} alt={nameItm} />
                                                    </div>
                                                    <div className="col-9">
                                                        <h3 className="text-success">{nameItm}</h3>
                                                        <h5 className="text-primary">Rp. {priceItm}</h5>
                                                        <p>Stock: {stockItm} pcs</p>
                                                        <small className="badge bg-success">{nameItm}</small>
                                                        <p>{nameItm}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-danger" onClick={() => deleteItem(id)}>Remove</button>
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

export default Item