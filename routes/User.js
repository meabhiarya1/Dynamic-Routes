const path = require("path");

const express = require("express");

const userController = require("../controllers/User");

const router = express.Router();

// /user/add-user => POST
router.post("/add-user", userController.addUser);

// /users/get-users => GET
router.get("/get-users", userController.getUser);

// /users/delete => DELETE
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
