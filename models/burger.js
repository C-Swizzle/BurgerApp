var orm=require("../config/orm.js");
var burger={
    insertOne: function(burgerName,cb){
        orm.insertOne("burgers",{burger_name:burgerName,devoured:0},cb);
    },
    selectAll:function(cb){
        // var data;
        orm.selectAll("burgers",cb);
    },
    updateOne:function(idToUpdate,updateObject,cb){
        orm.updateOne("burgers",updateObject,idToUpdate,cb);
    }
};
module.exports=burger;
// burger.selectAll(function(data){
//     console.table(data);
// });
// // burger.updateOne(1,{burger_name:"stupid"});
// burger.selectAll();
burger.updateOne(1,{devoured:false},function(data){
    console.table(data);
})