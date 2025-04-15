require('dotenv').config();
const express = require('express');
const db = require('./Config/db');
const cors = require('cors');
const User = require('./models/userModel');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello google cloud');
})
app.post('/add', async (req, res) => {
    console.log("Received Data:", req.body);  // ✅ Debugging ke liye
    try {
        const { title, author, price } = req.body;
        const newBook = new User({ title, author, price });
        await newBook.save();
        res.json({ message: "Data stored successfully in MongoDB Atlas" });
    } catch (error) {
        console.error("Database Error:", error);  // ✅ Error ko console me print karo
        res.status(500).json({ message: "Error storing data", error });
    }
});
app.get('/get', async (req, res) => {
    try {
        const allBooks = await User.find();
        res.json(allBooks);
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ message: "Error fetching data", error });
    }
});
const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));