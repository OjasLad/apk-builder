const express = require("express")

const app = express()

app.get("/", (req, res)=>{res.json({msg:"I am great."})})

app.listen(8080);
