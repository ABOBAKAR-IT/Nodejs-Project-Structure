const {
  add,
  find,
  update,
  dlete
 
} = require("../2-controllers/UserController");

const UserRoute = require("express").Router();
UserRoute.post("/add", add);
UserRoute.post("/find", find);
UserRoute.post("/update", update);
UserRoute.post("/delete", dlete);
module.exports = UserRoute;
