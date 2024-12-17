import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"; // Make sure this is correct import
import axios from "axios"; // Make sure this is correct import
import Form from "./Components/form";
import Welcome from "./Components/welcome";
import Login from "./Components/Login";
function App() {
    useEffect(() => {
        // Check if server is working
        axios
            .get("http://localhost:8000/")
            .then(() => {
                console.log("Server is running");
            })
            .catch(() => {
                console.log("There is a problem with connecting to the server. WE ARE SORRY");
            });
    }, []);

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Form />}></Route>
                    <Route exact path="/welcome" element={<Welcome />}></Route>
                    <Route exact path="/Login" element={<Login />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
