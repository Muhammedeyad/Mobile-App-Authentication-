const express = require("express")
const { connectToDb } = require("./db/connectToDb")
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
}))

app.get("/", (req, res)=>{
    res.send('fine')
})

// application routes here
app.use("/authentication/api", require("./routes/authenticationRoute"))

app.listen(5000, ()=>{
    connectToDb()
    console.log("server running on 5000")
})