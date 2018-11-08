/*
 * @PageName    :: TagRouter.js
 * @Author      :: Pradeep Kumar
 * @Description :: All routing of tag module
 * @Created Date:: 1 Nov 2018
 */
const express = require('express');
const TagRouter = express.Router();
var db = require('../database/db');
var md5 = require('md5');
var sha1 = require('sha1');
var formidable = require('formidable');
var fs = require('fs');
var appRoot = require('app-root-path');
const request = require('request');
var config = {
               salt_1:'pradeep3300!@#$'
            };
var sess = {
      token: '',
      user: {}
}


TagRouter.route('/gettaglist').post(function (req, res) {
  var user_id      = req.body.user_id;
  var token       = req.body.token;
  if(sha1(config.salt_1 + user_id)==token){
    db.connection.getConnection(function(err,connection){
        //Database Not Connected If there is any error  
        if (err) {
          console.log("Database is not connected");
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   
        //Database Connected Now
        console.log('You are now connected... id ' + connection.threadId);
        var sql = "SELECT c.id as id, c.title as title from tags c order by c.id DESC";
          connection.query(sql,function(error, rows,fields) {
              if (error) throw res.json(error)
                numRows = rows.length;
                if(numRows==0){
                  return res.json({status:'error',message:'!! No Records Found !!',code:'500',token:token});
                }else{
                  return res.json({status:'success',message:'',code:'200',result:rows,token:token});
              }
            })
          //Any Server Side Issues
          connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
            });
      });
  }else{
    res.json({"status":"error","code" : 500, "message" : "Invalid Token Request"});
  }

    
});


TagRouter.route('/gettag').post(function (req, res) {
  var user_id      = req.body.user_id;
  var token       = req.body.token;
  var type       = req.body.type;
  if(sha1(config.salt_1 + user_id)==token){
    db.connection.getConnection(function(err,connection){
        //Database Not Connected If there is any error  
        if (err) {
          console.log("Database is not connected");
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   
        //Database Connected Now
        console.log('You are now connected... id' + connection.threadId);
        if(type!=''){
          var sql = "SELECT c.id as id, c.title as name from tags c order by c.id DESC";
        }else{
          var sql = "SELECT c.* from tags c order by c.id DESC";
        }
          connection.query(sql,function(error, rows,fields) {
              if (error) throw res.json(error)
                numRows = rows.length;
                if(numRows==0){
                  return res.json({status:'error',message:'!! No Records Found !!',code:'500',token:token});
                }else{
                  return res.json({status:'success',message:'',code:'200',result:rows,token:token});
              }
            })
          //Any Server Side Issues
          connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
            });
      });



  }else{
    res.json({"status":"error","code" : 500, "message" : "Invalid Token Request"});
  }

    
});


TagRouter.route('/deltag').post(function (req, res) {
  var id = req.body.id;
  var token = req.body.token;
  // Connect to MySQL on start
  db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    if(id>0){
      var sql = 'DELETE FROM `tags` WHERE id = '+id;
      connection.query(sql, function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
      })
      var msg ='Tags updated Successfully';

    }
    connection.on('error', function(err) {   
          console.log("[mysql error]",err);   
          res.json({"code" : 100, "status" : err});
          return;     
    });
  });
});


TagRouter.route('/addtag').post(function (req, res) {
  var title = req.body.title;
  var status = req.body.status;
  var user_id = req.body.user_id;
  var token = req.body.token;
  var id = req.body.id;
  // Connect to MySQL on start
  db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    if(id>0){

      var sql = "UPDATE tags SET title = ?,status = ? where id = ?";
      var values  = [title, status,id];
      connection.query(sql, values, function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
      })
      var msg ='Tags updated Successfully';

    }else{

      var sql = "INSERT INTO tags (title,status) VALUES ?";
      var values = [[title,status]];
      connection.query(sql, [values], function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
        })
      var msg ='Tag added Successfully';
    }

    connection.on('error', function(err) {   
          console.log("[mysql error]",err);   
          res.json({"code" : 100, "status" : err});
          return;     
    });
  });
});
module.exports = TagRouter;
