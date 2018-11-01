const express = require('express');
const ServerPortRouter = express.Router();
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
// Use the session middleware
path = require('path'),
multer = require('multer'),
bodyParser = require('body-parser'),

ServerPortRouter.route('/uploadimage').post(function (req,res) {
    var files = req.files;
    if (Array.isArray(files)) {
         console.log(files);
        // response with multiple files (old form may send multiple files)
        console.log("Got " + files.length + " files");
    }
    else {
        // dropzone will send multiple requests per default
        console.log("Got one file");
    }
    res.sendStatus(200);
});


ServerPortRouter.route('/gettag').post(function (req, res) {
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
        var sql = "SELECT c.* from tags c order by c.id DESC";
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


ServerPortRouter.route('/deltag').post(function (req, res) {
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


ServerPortRouter.route('/addtag').post(function (req, res) {
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


ServerPortRouter.route('/delcategory').post(function (req, res) {
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
      var sql = 'DELETE FROM `category` WHERE id = '+id;
      connection.query(sql, function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
      })
      var msg ='Category updated Successfully';

    }
    connection.on('error', function(err) {   
          console.log("[mysql error]",err);   
          res.json({"code" : 100, "status" : err});
          return;     
    });
  });
});


ServerPortRouter.route('/addcategory').post(function (req, res) {
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

      var sql = "UPDATE category SET title = ?,status = ? where id = ?";
      var values  = [title, status,id];
      connection.query(sql, values, function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
      })
      var msg ='Category updated Successfully';

    }else{

      var sql = "INSERT INTO category (title,status) VALUES ?";
      var values = [[title,status]];
      connection.query(sql, [values], function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
        })
      var msg ='Category added Successfully';
    }

    connection.on('error', function(err) {   
          console.log("[mysql error]",err);   
          res.json({"code" : 100, "status" : err});
          return;     
    });
  });
});


ServerPortRouter.route('/getcategory').post(function (req, res) {
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
        var sql = "SELECT c.* from category c order by c.id DESC";
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





ServerPortRouter.route('/add').post(function (req, res) {
  var description = req.body.description;
  var user_id = req.body.user_id;
  var token = req.body.token;

  // Connect to MySQL on start
  db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    var sql = "INSERT INTO posts (description, user_id) VALUES ?";
    var values = [[description,user_id]];
    connection.query(sql, [values], function(error, results) {
          if (error) throw res.json(error);
            res.json({status:'success',message:'Post added Successfully',code:'200'});
          })
    connection.on('error', function(err) {      
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;     
    });
  });
});



ServerPortRouter.route('/').get(function (req, res) {
    
});

ServerPortRouter.route('/edit/:id').get(function (req, res) {
  
});

ServerPortRouter.route('/getuserpost').post(function (req, res) {
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
        var sql = "SELECT u.first_name,u.last_name,p.* from posts p JOIN users u on p.user_id=u.id order by p.id DESC";
          connection.query(sql,function(error, rows,fields) {
              if (error) throw res.json(error)
                numRows = rows.length;
                if(numRows==0){
                  return res.json({status:'error',message:'!! No Records Found !!',code:'500',token:token});
                }else{
                  return res.json({status:'success',message:'User Logged Successfully',code:'200',result:rows,token:token});
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

ServerPortRouter.route('/login').post(function (req, res,next) {
    var sess = {token: '',user: {}};
    var email_address      = req.body.email_address;
    var password        = req.body.password;
    if(email_address==''){
      return res.json({status:'error',message:'Invalid email address',code:'500'});
    }

    if(password==''){
      return res.json({status:'error',message:'Invalid password',code:'500'});
    }


    if(email_address!='' && password!=''){
        db.connection.getConnection(function(err,connection){
        //Database Not Connected If there is any error  
        if (err) {
          console.log("Database is not connected");
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   
        //Database Connected Now
        console.log('You are now connected... id ' + connection.threadId);
        var sql = "SELECT * from users where email_address='"+email_address+"' and password='"+md5(password)+"'";
          connection.query(sql,function(error, rows,fields) {
              if (error) throw res.json(error)
                numRows = rows.length;
                console.log(numRows);
                if(numRows==0){
                  return res.json({status:'error',message:'Invalid Credentials !!',code:'500'});
                }else{
                  for (var i in rows) {
                    sess.user = {
                                  id:rows[i].id,
                                  first_name:rows[i].first_name,
                                  last_name:rows[i].last_name,
                                  email_address: rows[i].email_address
                                };
                  } 
                  sess.token = sha1(config.salt_1 + sess.user.id);         
                  return res.json({status:'success',message:'User Logged Successfully',code:'200',res:sess});
              }
            })
        //Any Server Side Issues
        connection.on('error', function(err) {      
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;     
          });
      });
  }

});


ServerPortRouter.route('/register').post(function (req, res) {
    //console.log(req.body);
    //Get All the Post Data
    var first_name      = req.body.first_name;
    var last_name       = req.body.last_name;
    var email_address   = req.body.email_address;
    var password        = md5(req.body.password);
    var cpassword       = md5(req.body.cpassword);
    db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    var sql = "INSERT INTO users (first_name, last_name, email_address, password) VALUES ?";
    var values = [[first_name, last_name,email_address,password]];
    connection.query(sql, [values], function(error, results) {
          if (error) throw res.json(error);
            
            return res.json([{status:'success',message:'User Registered Successfully',code:'200'}]);
    })
    connection.on('error', function(err) {      
        res.json({"code" : 100, "status" : "Error in connection database"});
        return;     
    });
  });



});
module.exports = ServerPortRouter;
