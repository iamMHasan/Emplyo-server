const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 6000
const app = express()
app.use(express.json())
app.use(cors())
const userRoute = require("./route/user")

console.log(process.env.DATABASENAME)
const uri = `mongodb+srv://${process.env.DATABASENAME}:${process.env.DATABASEPASS}@cluster0.fshg8yr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri)
.then(console.log('database connected'))

app.get("/", (req, res)=>{
    res.send("d")
})

app.use("/api", userRoute)
app.listen(port, ()=> console.log(`app is running on ${port}`))

