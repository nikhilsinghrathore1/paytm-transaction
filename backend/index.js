const express = require("express");
const cors = require("cors")
const mainRouter = require("./Routes/route")
const userModel = require("./Model/user")
const app = express()


app.use(cors())
app.use(express.json())
app.use("/api/v1", mainRouter)


app.listen(3000);

