const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000,function(){
    console.log("Server is running at 3000");
});

app.get("/",function(req,res){
    res.send("Hello");
});