require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000
const products_routes = require("./routes/products")
const connectDB = require("./db/connect")
const cors = require('cors');
const product = require('./models/product')

app.use(express.json());


app.use("/", products_routes)

app.post("/addtodoCards", (req, res) => {
    console.log(req.body);
    const user = new product(req.body);
    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

    res.send("hello guys");
})

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        })
    } catch (error) {
        console.log(error)

    }
}

start();