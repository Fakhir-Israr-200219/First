const express = require("express");
const dbConect = require("./Config/dbConnection");
const errorHandling = require("./Middleware/errorHandling");
const dotenv = require("dotenv").config();

dbConect()
const app = express();
app.use(express.json());
app.use("/student",require("./Routes/student.route"));


app.use(errorHandling);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})