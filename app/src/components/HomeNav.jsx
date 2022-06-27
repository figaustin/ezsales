import React from "react";

const HomeNav = () => {

    return (
        <nav className="flex pr-40 pl-40 bg-slate-900 text-white items-center justify-between font-serif lg:border-b lg:border-slate-50/10" style={{height: "60px"}}>

            <a className="text-4xl " href="/"><h1 className="">EZSales</h1></a>

            <div>
                <ul className="flex space-x-10 text-xl">
                    <li className="">
                        <a className="" href="www.google.com"><h4>Pricing</h4></a>
                    </li>
                    <li className="">
                        <a className="" href="www.google.com"><h4>FAQ</h4></a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex space-x-5 text-xl">
                    <li className="">
                        <a className="" href="www.google.com"><h5>Sign Up</h5></a>
                    </li>
                    <li className="">
                        <a className="" href="www.google.com"><h5>Log in</h5></a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default HomeNav;