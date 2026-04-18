
const { Router } = require('express');
const {ListtUser} = Router("../controllers/user");

const route = Router();

route.get("/users", ListtUser);
route.post("/users", createUser);

module.exports = route;
