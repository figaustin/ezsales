import React, {Fragment, useEffect} from "react";
import {useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {Combobox, Transition} from "@headlessui/react";


const Sale = () => {

    const [updater, setUpdater] = useState(1);
    const [productsList, setProductsList] = useState([]);
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState([]);

    const [invoiceProducts, setInvoiceProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [invoice, setInvoice] = useState({
        id: "",
        total: "",
        products: ""
    })

    const filtered = query === '' ? productsList : productsList.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
    })

    useEffect(() => {
        let mounted = true
        axios.get(`http://localhost:8080/api/business/${localStorage.getItem("id")}`)
            .then(res => {
                if(mounted) {
                    console.log("Response after product call", res.data);
                    setProductsList(res.data.products);
                }
            })
            .catch(err => {console.log(err)})

    },[])

    useEffect(() => {
        setInvoiceProducts([...invoiceProducts, selected])
    },[selected])

    useEffect(() => {
        let sum = 0;
        for(let i = 1; i < invoiceProducts.length; i++) {
            sum += parseFloat(invoiceProducts[i].price);
        }
        setTotal(sum);
    },[invoiceProducts])

    const receipt = () => {
        if(invoiceProducts.length < 2) {
            alert("Please add an item to the order.")
            return;
        }
        let invoiceStringArray = []

        for(let i = 1; i < invoiceProducts.length; i++) {
            invoiceStringArray.push(invoiceProducts[i].name)
        }
        console.log(invoiceStringArray)
        invoiceSend(invoiceStringArray)


    }

    const invoiceSend = (invoiceStringArray) => {
        axios.post("http://localhost:8080/api/invoices/receipt", invoiceStringArray)
            .then(res => {
                console.log(res)
                invoiceGet();
            })
            .catch(err => console.log(err))
    }

    const invoiceGet = () => {
        axios.get("http://localhost:8080/api/invoices/download/invoice.pdf")
            .then(res => {
                console.log(res)
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "invoice.pdf");
                document.body.appendChild(link);
                link.click();
            })
            .catch(err => console.log(err))
    }

    const remove = (idx) => {
        let test = []

        for(let i = 0; i < invoiceProducts.length; i++) {
            if(test[i] != invoiceProducts[idx]) {
                test.push(invoiceProducts[i])
            }
        }
        setInvoiceProducts(test)
        setUpdater(() => updater + 1)
        console.log(updater)
    }
    return(
        <div className="flex font-serif">
            <Sidebar></Sidebar>
            <div className="flex-column justify-center w-full">
            <div className="border-slate-600">

                <div className="w-72 mx-auto">
                    <Combobox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <Combobox.Input
                                    className="w-full border-2 border-slate-400 py-2 pl-3 pr-10 text-sm leading-5 text-gray-700 focus:ring-0"
                                    displayValue={(product) => product.name}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Combobox.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery('')}
                            >
                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filtered.length === 0 && query !== '' ? (
                                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                            Nothing found.
                                        </div>
                                    ) : (
                                        filtered.map((product) => (
                                            <Combobox.Option
                                                key={product.id}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active ? 'bg-cyan-600 text-white' : 'text-gray-900'
                                                    }`
                                                }
                                                value={product}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                        <span
                            className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {product.name}
                        </span>
                                                        {selected ? (
                                                            <span
                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                    active ? 'text-white' : 'text-teal-600'
                                                                }`}
                                                            >

                          </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))
                                    )}
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>
                </div>
            </div>
            <div className="overflow-auto">
                <table className="overflow-auto border-spacing-5 mx-auto w-full">
                    <thead>
                    <tr className="bg-slate-400 text-xl border border-slate-900">
                        <th>Product</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody >

                    {
                        invoiceProducts.length > 1 ?
                        invoiceProducts.map((product, idx) => {
                            return(
                                idx > 0 ?
                                <tr className="odd:bg-slate-300 even:bg-slate-400 border border-slate-700 text-lg text-center border text-gray-800">
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td><button onClick={(e) => remove(idx)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg></button></td>
                                </tr> : ""
                            )
                        }) : ""
                    }
                    </tbody>
                </table>
                <div className="ml-80 fixed inset-x-0 bottom-0 bg-slate-300 text-4xl font-serif border-t-2 border-slate-500 flex justify-between items-center p-5">
                    <p>Total: ${total}</p>
                    <button type="button" onClick={receipt}
                            className="text-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-slate-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-10 py-2.5 text-center mr-2 mb-2">
                        Pay
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sale;