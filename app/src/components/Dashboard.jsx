import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {

    let [business, setBusiness] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/api/business/${localStorage.getItem("id")}`)
            .then(res => {
                console.log("Response after current call", res);
                setBusiness(res.data);
            })
            .catch(err => {console.log(err)})
    },[])
    return (
        <div className="flex font-serif">
            <Sidebar></Sidebar>
            <div className="border-slate-900 border-1">
            </div>
        </div>
    )
}

export default Dashboard;
