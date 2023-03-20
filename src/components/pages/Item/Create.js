import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const URL = 'http://localhost:3000/api'
    const navigate = useNavigate()

    const [nameItm, setNameItm] = useState("")
    const [stockItm, setStockItm] = useState("")
    const [priceItm, setPriceItm] = useState("")
    const [imageItm, setImageItm] = useState("")

    const addItem = async () => {
        try {
            let result = await axios({
                url: `${URL}/items/add`,
                method: "POST",
                data: {
                    nameItm,
                    stockItm: +stockItm,
                    priceItm: +priceItm,
                    imageItm: +imageItm,
                }
            })
            setNameItm("")
            setStockItm("")
            setPriceItm("")
            setImageItm("")
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

    const submitHandler = (e) => {
        e.preventDefault()
        addItem()
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 text-center p-2'>
                    <h3>Create Item</h3>
                </div>
                <div className="col-6 form-submit mx-auto">
                    <form>
                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                value={nameItm}
                                onChange={e => setNameItm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input Name" />
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
                            <label>Image</label>
                            <input
                                value={imageItm}
                                onChange={e => setImageItm(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Input image's url" />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-success w-100"
                                onClick={submitHandler}
                            >Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create