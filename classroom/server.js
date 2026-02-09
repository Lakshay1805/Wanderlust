const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path")

app.use(session({secret:"secretsession" , resave:false,saveUninitialized:true}));
app.use(flash());
app.set("view engine" ,"ejs");
app.set("views" , path.join(__dirname,"views"));

app.use((req,res,next)=>{
    res.locals.SuccessMsg = req.flash("success");
    res.locals.FailMsg=req.flash("error");
    next();
})

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name = name;
    if(name ==="anonymous"){
        req.flash("error","Error!registration failed");
    }
    else{
      req.flash("success","Good!registered successfully");
    }
       res.redirect("/greet");
})
app.get("/greet" ,(req,res) =>{
   res.render("practice.ejs",{name:req.session.name}) 
})

app.listen(3000,() =>{
    console.log("app is listening on port 3000");
})