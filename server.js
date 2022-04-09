const express = require("express")
const app = express()
const PORT = 3000;

app.get("/", (req,res)=>{
    res.send("this is the new route")
})

app.get("/scientist",(req,res) =>{
    res.render('new.ejs')
})



app.listen(PORT, ()=>{
    console.log("Listening on port 3000")
})