var cors = require('cors');
const express = require("express");
const { connection } = require("./Config/db");
const { JobsRoute } = require('./Routes/jobs.route');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello Jobs Backend")
})
app.use("/jobs", JobsRoute)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Connection is established on Port ${PORT}`)
    }
    catch (err) {
        console.log("error")
        console.log(err)
    }
})