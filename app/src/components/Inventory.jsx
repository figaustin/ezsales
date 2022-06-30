import React from "react";
import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";
import axios from "axios";

const Inventory = () => {

    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/business/${localStorage.getItem("id")}`)
            .then(res => {
                console.log("Response after product call", res.data);
                setProductsList(res.data.products);
            })
            .catch(err => {console.log(err)})
    },[])
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

                <table className="overflow-auto border-spacing-5 mx-auto container">
                    <thead>
                        <tr className="bg-slate-400 text-xl">
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
                                    <td className="flex justify-center gap-2"><a href={`/edit/${product.id}`} className="hover:text-black">Edit</a><p className="hover:text-black">Delete</p></td>
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