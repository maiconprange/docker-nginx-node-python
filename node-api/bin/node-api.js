"use strict";function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}var Articles=function e(){_classCallCheck(this,e),this.retrieve=function(){console.info("retrieve!")}};module.exports=Articles;var express=require("express"),ip=require("ip"),app=express();app.get("/node-api/user",function(e,s){s.send("Hey NODEJS single user!")}),app.get("/node-api/users",function(e,s){s.send("Hey NODEJS multiple users!")}),app.listen(3e3,function(){console.log("\r\n * Node.js API listening on "+ip.address()+":3000! * \r\n")});
//# sourceMappingURL=node-api.js.map