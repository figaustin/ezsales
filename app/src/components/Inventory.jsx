import React from "react";
import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const Inventory = () => {

    const [updater, setUpdater] = useState(1);
    const history = useHistory();
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/business/${localStorage.getItem("id")}`)
            .then(res => {
                console.log("Response after product call", res.data);
                setProductsList(res.data.products);

            })
            .catch(err => {console.log(err)})
    },[updater])

    const delProduct = (id) => {

        axios.delete(`http://localhost:8080/api/products/delete/${id}`)
            .then(res => {
                console.log(res)
                setUpdater(id+1);
            })
            .catch(err => console.log(err))

    }
    return(
        <div className="flex font-serif">
            <Sidebar></Sidebar>
            <div className="flex-column justify-center w-full">
                <div className="mx-auto flex justify-center w-full bg-slate-300">
                    <div className="xl:w-96 flex gap-6 justify-center text-gray-700 hover:text-black">
                        <form>
                            <input
                                type="search"
                                className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                            m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none
                          "
                                id="exampleSearch"
                                placeholder="Search Products"
                            />
                        </form>
                        <a href="/inventory/add">Add a new product </a>
                    </div>
                </div>

                <table className="overflow-auto w-full">
                    <thead>
                        <tr className="bg-slate-400 text-xl border-slate-700 border">
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                    {
                        productsList.map((product, idx) => {
                            return(
                                <tr className="odd:bg-slate-300 even:bg-slate-400 border border-slate-700 text-lg text-center border text-gray-800">
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.amount}</td>
                                    <td>${product.price}</td>
                                    <td className="flex justify-center gap-4"><a href={`/edit/${product.id}`} className="hover:text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </a>
                                        <p className="hover:text-black hover:cursor-pointer" onClick={(e) => delProduct(product.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Inventory;