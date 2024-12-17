const express = require("express");
const app = express();
const users = require("./mongoose");
const cors = require("cors");
const path = require("path");

app.use(cors()); // Allow all origins by default
app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true })); // To parse form data

// Serve React build files

const port = process.env.PORT || 8000;
let formData = [];
// Home route (Optional check for server)
app.get("/", (req, res) => {
    res.send("Your backend is working");
    console.log("Your backend is working");
});

// Handling the form submission
app.post("/register", async (req, res) => {
    try {
        const { name, email, state, age, password } = req.body;
        console.log(password);

        // Check if email already exists
        const emailExists = await users.findOne({ email });

        if (emailExists || age > 80) {
            // idhar alert lagana hai
            return res.status(400).json({ message: "Email already exists! or Invalid Input" }); // Sending response to frontend
        }
        // Save the user if email is unique
        const user = new users({ name, email, state, age, password });
        await user.save();

        // Save the new user to formData array temporarily for GET request
        formData.push({ name, email, state, age });
        // or idhar bhi alert lagana hai  ki tumhara form save ho gya
        return res.status(200).json({ message: "Your form data saved succesfully !" }); // Sending response to frontend
    } catch (err) {
        console.error(err);
        res.status(500).send("Error while saving user");
        return res.json({ formData });
    }
});

app.get("/register", (req, res) => {
    // Send the formData array or database records
    res.json(formData); // or use users.find() if using a database
});

app.post("/loginn", async (req, res) => {
    const { email, password, role, secret } = req.body;

    try {
        // Admin case: secretKey should be validated
        if (role === "admin") {
            if (secret !== "yash") {
                return res.status(400).json({ message: "Invalid Secret Key" });
            }

            const emailExists = await users.findOne({ email }); // mongodb real data email

            if (emailExists.email !== email || emailExists.password !== password) {
                return res.status(400).json({ message: "Invalid Username or Password" });
            } else if (emailExists.email === email && emailExists.password === password) {
                logindata.push({ email });
                return res.status(200).json({ message: "You logged in successfully as Admin" });
            }
        }

        // User case: secretKey is not required
        if (role === "user") {
            const emailExists = await users.findOne({ email });

            if (emailExists.email !== email || emailExists.password !== password) {
                return res.status(400).json({ message: "Invalid Username or Password" });
            } else if (emailExists.email === email && emailExists.password === password) {
                logindata.push({ email });
                // Use redirect here
                res.redirect("http://localhost:3000/welcome");
                return;
            }
        }

        return res.status(400).json({ message: "Invalid Role" });
    } catch (err) {
        console.error("Server Error:", err);
    }
});

app.get('/loginn', (req, res) => {
    //get data nhi aa rha hai kasie data ko lu 
})
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
