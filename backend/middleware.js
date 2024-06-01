const secret = require("./config")

const jwt = require("jsonwebtoken")

function verifytoken(req,res,next){
               const token = req.headers['authorization']
               console.log(token)
               try{
                              jwt.verify(token , secret , (err,decode)=>{
                                             if(err){
                                                            console.log(err)
                                                            res.status(400).send("wrong token");
                                             }
                                             else{
                                                            req.userId = decode;
                                                            next()
                                             }
                              })
               }
               catch(err){
                              console.log(err)
                              res.status(400).send("something went wrong")
               }
}
module.exports = verifytoken;