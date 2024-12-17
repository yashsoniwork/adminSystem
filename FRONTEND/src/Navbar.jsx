import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <div className="flex h-[66px] w-full bg-black text-white items-center justify-around">
                <Link to="/">Home</Link>
                <div>
                    <Link to={"/Login"} className="px-4 mx-2 bg-blue-300 rounded-3xl py-1 text-black">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}
