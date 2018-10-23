const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
var db = require('../database/db');
var md5 = require('md5');
ServerPortRouter.route('/add').post(function (req, res) {
  var name = req.body.name;
  var port = req.body.port;
  // Connect to MySQL on start
  db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    var sql = "INSERT INTO posts (title, description, user_id) VALUES ?";
    var values = [[name, port,57]];
    connection.query(sql, [values], function(error, results) {
          if (error) throw res.json(error);
            res.json('Data Inserted Suucessfully');
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

ServerPortRouter.route('/update/:id').post(function (req, res) {
    
});

ServerPortRouter.route('/login').post(function (req, res) {
    console.log(req.body);
    var email_address      = req.body.email_address;
    var password        = md5(req.body.password);
    db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);

    var sql = "SELECT * from users where email_address='"+email_address+"' and password='"+password+"'";
    console.log(sql);
    connection.query(sql,function(error, results) {
          if (error) throw res.json(error);
            console.log(results);
            return res.json([{status:'success',message:'User Logged Successfully',code:'200'}]);
          })
          connection.on('error', function(err) {      
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;     
        });
    });

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
