import React from "react";
import {useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";
const Register = () => {

    const history = useHistory();
    const [business, setBusiness] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        confirm: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setBusiness({...business, [e.target.name]: value})
    }
    const register = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/api/business/register", business)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 text-black">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-bold ">Register your business' account.</h2>
                <form onSubmit={register}>
                    <div className="mb-4">
                        <label className="block mb-1" >Business Name</label>
                        <input id="name" type="text" name="name" onChange={(e) => handleChange(e)}
                               className="text-black py-2 px-3 border border-gray-300 focus:border-cyan-300 focus:outline-none focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                    </div>
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
                    <div className="mb-4">
                        <label className="block mb-1" >Confirm Password</label>
                        <input id="confirm" type="password" name="confirm" onChange={(e) => handleChange(e)}
                               className="text-black py-2 px-3 border border-gray-300 focus:border-cyan-300 focus:outline-none focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                    </div>
                    <div className="mt-6">
                        <input type="submit"
                            className="text-center text-2xl w-full inline-flex items-center justify-center px-4 py-2 bg-slate-700 border border-transparent rounded-md font-semibold capitalize text-black hover:bg-slate-800 active:bg-slate-800 focus:outline-none focus:border-cyan-700 focus:ring focus:ring-cyan-200 disabled:opacity-25 transition"
                            value="Register"/>
                    </div>
                    <div className="mt-6 text-center">
                        <a href="/login" className="underline">Already have an account? Sign in.</a>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register;