const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytmDB")

const accountSchema = mongoose.Schema({
               userId:{
                              type:mongoose.Schema.Types.ObjectId,
                              ref:"userModel",
                              required:true
               },
               balance:{
                              type:Number,
                              required:true
               }
})

module.exports = mongoose.model("accountSchema" , accountSchema)