var express=require("express");
var burger=require("../models/burger.js");
module.exports=function(app){
    app.get("/",function(req,res){
        burger.selectAll(function(data){
            // console.log(data);
            res.render("index",{data:data})
        })
        
    });
};
