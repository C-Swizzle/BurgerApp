var express=require("express");
var burger=require("../models/burger.js");
module.exports=function(app){
    app.get("/",function(req,res){
        burger.selectAll(function(data){
            // console.log(data);
            res.render("index",{data:data});
        })
        
    });
    app.put("/api/burgers/:id",function(req,res){
        console.log(req.body);
        console.log(req.params);
        burger.updateOne(req.params.id,req.body,function(){
            res.status(204).end();
        });
    });
    app.post("/api/burgers",function(req,res){
        console.log(req.body);
        burger.insertOne(req.body.burgerName,function(data){
            res.status(204).end();

        });
    });
    app.delete("/api/burgers/:id",function(req,res){
        burger.deleteOne(req.params.id,function(response){
            res.status(204).end();

        });
    });
};
