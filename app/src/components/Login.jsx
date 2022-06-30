import React, {createContext} from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


const Login = () => {

    const history = useHistory();
    const [business, setBusiness] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setBusiness({...business, [e.target.name]: value})
    }

    const login = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/api/business/login", business)
            .then(res => {
                console.log(res)
                localStorage.setItem("id", res.data.id)
                history.push(`/dashboard`)
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 text-black">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-bold ">Sign In</h2>
                <form onSubmit={login}>
                    <div className="mb-4">
                        <label className="block mb-1" >Email Address</label>
                        <input id="email" type="text" name="email" onChange={(e) => handleChange(e)}
                               className="text-black py-2 px-3 border border-gray-300 focus:border-cyan-300 focus:outline-none focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" >Password</label>
                        <input id="password" type="password" name="password" onChange={(e) => handleChange(e)}
                               className="text-black py-2 px-3 border border-gray-300 focus:border-cyan-300 focus:outline-none focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                    </div>

                    <div className="mt-6">
                        <input type="submit"
                               className="text-center text-2xl w-full inline-flex items-center justify-center px-4 py-2 bg-slate-700 border border-transparent rounded-md font-semibold capitalize text-black hover:bg-slate-800 active:bg-slate-800 focus:outline-none focus:border-cyan-700 focus:ring focus:ring-cyan-200 disabled:opacity-25 transition"
                               value="Log in"/>
                    </div>
                    <div className="mt-6 text-center">
                        <a href="/register" className="underline">Don't have an account yet? Register.</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;