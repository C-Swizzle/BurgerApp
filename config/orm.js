var connection=require("./connection.js");
var orm = {

    selectAll: function(tableName,cb){
        connection.query("SELECT * FROM ??",tableName,function(err,data){
            if(err){
                console.log(err);
            }
            cb(data);
        });
    },
    insertOne: function(tableName,insertObject,cb){
        var queryStr="INSERT INTO ?? SET ?";
        connection.query(queryStr,[tableName,insertObject],function(err,data){
            if(err){
                console.log(err);
            }
            cb(data);
        });

    },
    updateOne: function(tableName,insertObject,idToSet,cb){
        var queryStr="UPDATE ?? SET ? WHERE ?";
        connection.query(queryStr,[tableName,insertObject,{id:idToSet}],function(err,data){
            if(err){
                console.log(err);
            }
            cb(data);
        });
    },
    deleteOne: function(tableName,deleteId,cb){
        var queryStr="DELETE FROM ?? WHERE ?";
        connection.query(queryStr,[tableName,{id:deleteId}],function(err,data){
            if(err){
                console.log(err);
            }
            cb(data);
        })
    }


};
module.exports=orm;