import React, {useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const ProductForm = () => {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        amount: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value})
    }

    const add = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8080/api/products/add/${localStorage.getItem("id")}`, product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return(
        <div className="flex font-serif">
            <Sidebar></Sidebar>
            <div className="mx-auto">
            <p className="text-3xl font-serif text-center mt-6">Add your new product</p>
            <form className="mt-20 w-96" onSubmit={add}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => handleChange(e)} name="name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                           border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500
                           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-6">Product Name
                        </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" onChange={(e) => handleChange(e)} name="price"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                           border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500
                           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-6">Price
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" onChange={(e) => handleChange(e)} name="amount"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                           border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500
                           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " />
                    <label
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-6">Amount
                    </label>
                </div>
                    <div className="form-check">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-600 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox" value="" id="flexCheckDefault" onChange={(e) => handleChange(e)}/>
                            <label className="form-check-label inline-block text-gray-800"
                                   htmlFor="flexCheckDefault">
                                Taxable?
                            </label>
                    </div>

                <input type="number" hidden={true} name="business_id" value={localStorage.getItem("id")}/>
                <button type="submit"
                        className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                        ont-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                        dark:focus:ring-blue-800">Submit
                </button>
            </form>

            </div>
        </div>
    )
}

export default ProductForm;