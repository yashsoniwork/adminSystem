import React from "react";
import { useState } from "react";
export default function Form() {
    return (
        <>
            <form className="mx-[7vw] mt-[12vh]" method="POST" action="http://localhost:8000/register">
                <div className="flex">
                    <label htmlFor="name">Name</label>
                    <input name="name" placeholder="Enter your name" className="mx-2 border-2 border-black" type="text" />
                </div>
                <div className="flex my-3">
                    <label htmlFor="email">Email</label>
                    <input placeholder="abc@gmail.com" name="email" className="mx-2  border-2 border-black" type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="state">State</label>
                    <input placeholder="State" name="state" className="mx-2 w-[41vw]  border-2 border-black" type="text" />
                    <label htmlFor="age">Age</label>
                    <input placeholder="00" name="age" className="mx-2 border-[2px] border-black w-[48px]" type="number" />
                </div>
                <div className="flex my-3">
                    <label htmlFor="password">Password</label>
                    <input placeholder="paaaword" name="password" className="mx-2  border-2 border-black" type="password" />
                </div>
                <button type="submit" className="text-white bg-black my-4 w-full flex justify-center rounded-lg">
                    Submit
                </button>
            </form>
        </>
    );
}
