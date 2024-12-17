import React, { useState } from "react";

export default function Login() {
    const [role, setRole] = useState("user"); // Default role is 'user'
    const [secretKey, setSecretKey] = useState(""); // State for user input of secret key

    const handleSubmit = (e) => {
        console.log(role); // Debug role
        console.log(secretKey); // Debug secret key
        if (role === "admin") {
            setSecretKey("yash");
        }
    };

    return (
        <>
            <form className="mx-10 mt-9" method="POST" action="http://localhost:8000/loginn" onSubmit={handleSubmit}>
                <input className="mx-2" name="check" id="user" type="radio" value="user" checked={role === "user"} onChange={() => setRole("user")} /> User{/* this input is defined role == User */}
                <input className="mx-2" name="check" id="Admin" type="radio" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} /> Admin {/* and this is for Admin */}
                <br />
                <label htmlFor="username">Username</label>
                <input placeholder="abc@gmail.com" name="email" className="border-2 border-black" type="email" required />
                <br />
                <label htmlFor="password">Password</label>
                <input placeholder="Password" name="password" className="border-2 border-black" type="password" required />
                <br />
                {role === "admin" && (
                    <>
                        <label htmlFor="secret">Enter Secret Key</label>
                        <input placeholder="Enter the Secret key" name="secret" className="border-2 border-black" type="password" required />
                        <br />
                    </>
                )}
                {/* Hidden input field to send role value */}
                <input type="hidden" name="role" value={role} />
                <button type="submit" className="bg-black text-white px-2 py-1 rounded-md mt-3 ml-auto flex mr-14">
                    Proceed
                </button>
            </form>
        </>
    );
}
