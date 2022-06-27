import React from "react";
import {useState} from "react";
import axios from "axios";
const Register = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    const register = (e) => {
        e.preventDefault();

        let formInfo = {name, email, password, confirmPassword}
        axios.post("http://localhost:8080/api/businesses", formInfo)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

    }

    return(
        <div className="text-white">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-bold">Register your business</h2>
                <form onSubmit={register}>
                    <div className="mb-4">
                        <label className="block mb-1" >Business Name</label>
                        <input id="name" type="text" name="name" onChange={(e) => setName(e.target.value)}
                               className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full text-black"/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" >Email-Address</label>
                        <input id="email" type="text" name="email" onChange={(e) => setEmail(e.target.value)}
                               className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full text-black"/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" >Password</label>
                        <input id="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)}
                               className="text-black py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" >Confirm Password</label>
                        <input id="confirm" type="password" name="confirm" onChange={(e) => setConfirmPassword(e.target.value)}
                               className="text-black py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
                    </div>

                    <div className="mt-6">
                        <input type="submit"
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-cyan-800 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                            value="Register"/>


                    </div>
                    <div className="mt-6 text-center">
                        <a href="/signin" className="underline">Already have an account? Sign in.</a>
                    </div>
                </form>
            </div>
        </div>

    )


}

export default Register;