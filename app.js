const express = require("express");
const bodyParser = require("body-parser");
const { redirect } = require("statuses");
const app = express();

let items =["Buy Food","Cook Food","Eat Food"];
let works =[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');


app.listen(3000,function(){
    console.log("Server is running at 3000");
});

app.get("/",function(req,res){


/*     https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
 */    
    
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);


    res.render("index",{listTitle : day , kindOfInput : items})
});

app.post("/",function(req,res){


    let input = req.body.input ;

    let valueButton = req.body.button ; 
    console.log(valueButton);
    if(valueButton === "Work")
    {
        works.push(input);
        res.redirect("/work"); 
    }
    else {
        items.push(input);
        res.redirect("/");
    }


   // res.send(input);

})

app.get("/work",function(req,res){
    res.render("index",{listTitle : "Work" , kindOfInput : works})
});

/* app.post("/work",function(req,res){

    let itemWork = req.body.input;
    works.push(itemWork);
    res.redirect("/work");

}); */


app.get("/about",function(req,res){

    res.render("about");
});
