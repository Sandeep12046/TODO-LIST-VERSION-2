const express=require("express");
const bodyParser=require("body-parser");
var app=express();
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");

const trySchema=new mongoose.Schema({
    name:String
});
const item=mongoose.model("second",trySchema);
// const todo2=new item({
//     name:"Learn DSA"
// });
// const todo3=new item({
//     name:"Learn React JS"
// });
// const todo4=new item({
//     name:"learn ejs"
// });
// todo2.save();
// todo3.save();
// todo4.save();
app.get("/",function(req,res){
    item.find({},function(err,foundItems){
        res.render("list",{ejes:foundItems})
        });
});
app.post("/",function(req,res){
    const itemName=req.body.ele1;
    const todo4=new item({
    name:itemName
    });
    todo4.save();
    res.redirect("/");
});
app.post("/delete",function(req,res){
    const checked=req.body.checkbox1;
    item.findByIdAndRemove(checked,function(err){
        if(!err){
            console.log("deleted");
            res.redirect("/");
        }
    })
})
app.listen("4000",function(){
    console.log("Server is running");
});
