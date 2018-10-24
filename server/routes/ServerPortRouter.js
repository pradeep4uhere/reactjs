const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
var db = require('../database/db');
var md5 = require('md5');
var sha1 = require('sha1');
var config = {
               salt_1:'pradeep3300!@#$'
            };
var sess = {
      token: '',
      user: {}
}

// Use the session middleware
ServerPortRouter.route('/add').post(function (req, res) {
  var name = req.body.name;
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
    var sql = "INSERT INTO posts (title, description, user_id) VALUES ?";
    var values = [[name, description,user_id]];
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
        var sql = "SELECT u.first_name,u.last_name,p.* from posts p JOIN users u on p.user_id=u.id";
          connection.query(sql,function(error, rows,fields) {
              if (error) throw res.json(error)
                numRows = rows.length;
                if(numRows==0){
                  return res.json({status:'error',message:'!! No Records Found !!',code:'500'});
                }else{
                  return res.json({status:'success',message:'User Logged Successfully',code:'200',result:rows});
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
