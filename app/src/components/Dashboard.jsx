import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const [lowInv, setLowInv] = useState([])
    const [loaded, setLoaded] = useState(false);
    let [business, setBusiness] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/api/business/${localStorage.getItem("id")}`)
            .then(res => {
                console.log("Response after current call", res.data);
                setBusiness(res.data);
                setLoaded(true);
            })
            .catch(err => {console.log(err)})
    },[])


    useEffect(() => {
        if(loaded) {
            for(let i = 0; i < business.products.length; i++) {
                if(business.products[i].amount < 6) {
                    console.log("Test")
                    lowInv.push(business.products[i]);
                }
            }
        }
    },[loaded])


    return (
        <div className="flex font-serif">
            <Sidebar></Sidebar>
            <div className="border-slate-900 border-1">
                <table className="overflow-auto border-spacing-5 mx-auto w-full">
                    <thead>
                        <tr className="bg-slate-400 text-xl border border-slate-900">
                            <th>Low Stock</th>
                        </tr>
                    </thead>
                    <tbody className="odd:bg-slate-300 even:bg-slate-400 border border-slate-700 text-lg text-center border text-gray-800">
                    {
                        lowInv.map((product, idx) => {
                            return(
                                <tr>
                                    <td>{product.name}</td>
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

export default Dashboard;
