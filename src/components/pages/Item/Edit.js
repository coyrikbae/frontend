import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let { id } = useParams()
    const URL = 'http://localhost:3000/api'
    const navigate = useNavigate()

    const [nameItm, setNameItm] = useState("")
    const [stockItm, setStockItm] = useState("")
    const [priceItm, setPriceItm] = useState("")

    const editItem = async () => {

        try {
            let temp = await axios({
                url: `${URL}/items/edit/${id}`,
                method: "PUT",
                data: {
                    nameItm,
                    stockItm: +stockItm,
                    priceItm: +priceItm,

                }
            })
            console.log(temp)
            setNameItm("")
            setStockItm("")
            setPriceItm("")

            Swal.fire(
                'Item created',
                'Item has been added to the list',
                'success'
            )

            navigate("/item")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            {/* <h1>Welome editinfgianskgnakjsv </h1> */}
            <div className='row'>
                <div className='col-12 text-center p-2'>
                    <h3>Edit Item</h3>
                </div>
                <div className="col-6 form-submit mx-auto">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        editItem();
                    }}>
                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                value={nameItm}
                                onChange={e => setNameItm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input name" />
                        </div>
                        <div className="mb-3">
                            <label>Stock</label>
                            <input
                                value={stockItm}
                                onChange={e => setStockItm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Stock" />
                        </div>
                        <div className="mb-3">
                            <label>Price</label>
                            <input
                                value={priceItm}
                                onChange={e => setPriceItm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Price" />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-success w-100"
                            // onClick={editItem}
                            >Edit Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit