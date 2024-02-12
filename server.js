// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 8080;
mongoose.connect('mongodb+srv://parthkulkarni1602:XB8nFCAXYP8HCJQ5@cluster0.ldbgibz.mongodb.net/');
const db = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

db.on('error', () => console.log("Error in connecting to database"));
db.once('open', () => console.log("Connected to database"))

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', usersSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
}).listen(3000);

app.post("/signup", (req, res) => {
    const { name, email, contact_no } = req.body;

    const data = {
        "name": name,
        "email": email,
        "contact_no": contact_no,
    };

    db.collection('users').insertOne(data, (err, result) => {
        if (err) {
            console.error("Error inserting record:", err);
            return res.status(500).send("Internal Server Error");
        }

        console.log("Record inserted successfully!!");
        return res.redirect('./signup_success.html');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
