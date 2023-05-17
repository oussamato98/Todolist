const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items =["Buy Food","Cook Food","Eat Food"];

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');


app.listen(3000,function(){
    console.log("Server is running at 3000");
});

app.get("/",function(req,res){


/*     https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
 */    
    
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today = new Date();
    var day = today.toLocaleDateString("en-US", options);


    res.render("index",{kindOfDay : day , kindOfInput : items})
});

app.post("/",function(req,res){


    var input = req.body.input ;
    items.push(input);
    res.redirect("/");

   // res.send(input);

})


