import React, {useEffect} from "react";
import axios from "axios";

const Home = () => {

    useEffect(() => {
        axios.get("http://localhost:8080/api/employees/")
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (

        <div className="flex max-w-lg container mx-auto text-3xl text-white mt-28">
            <p>A lightweight and easy Point-of-sale solution for your small business.</p>
        </div>
    )
}

export default Home;