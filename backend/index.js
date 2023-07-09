const express = require("express")
const User = require("./models/User");

const app = express()

app.get("/",(req,res)=> {
    res.json({
        message : User.modelName
    })
})

let PORT = 4100

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
})

