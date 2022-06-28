import React from "react";

const HomeNav = () => {

    return (
        <nav className="bg-slate-900 font-serif font-bold flex pl-20 pr-20 text-white justify-between items-center lg:border-b lg:border-slate-200/10" style={{height: "60px"}}>
            <a className="text-4xl" href="/"><h1 className="">EZSales</h1></a>
                <ul className="flex text-xl space-x-10">
                    <li className="">
                        <a className="" href="/"><h4>Pricing</h4></a>
                    </li>
                    <li className="">
                        <a className="" href="/"><h4>FAQ</h4></a>
                    </li>
                </ul>
                <ul className="flex text-xl space-x-8">
                    <li className="">
                        <a className="" href="/register"><h5>Sign Up</h5></a>
                    </li>
                    <li className="">
                        <a className="" href="/login"><h5>Log in</h5></a>
                    </li>
                </ul>
        </nav>
    )
}

export default HomeNav;