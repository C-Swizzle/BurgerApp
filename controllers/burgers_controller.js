var express=require("express");
var burger=require("../models/burger.js");
module.exports=function(app){
    app.get("/",function(req,res){
        res.render("index",{data:burger.selectAll})
    });
};
console.table(burger.selectAll());