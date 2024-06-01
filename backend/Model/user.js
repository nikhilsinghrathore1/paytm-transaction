const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytmDB")

const userModel =  new mongoose.Schema({
               username:{
                              type:String, 
                              unique:true
               },
               firstname:{
                              type:String, 
                              required:true,
               },
               lastname:{
                              type:String, 
                              required:true
               },
               password:{
                              type:String ,
                              required:true
               }
});

module.exports = mongoose.model("userModel" , userModel);
