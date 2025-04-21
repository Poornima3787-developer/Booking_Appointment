const express=require('express');
const userController=require('../controllers/userController');
const router=express.Router();

router.post("/users", userController.addEntries);
router.get("/users", userController.getAllUsers);
router.delete("/users/:id", userController.deleteUser);

module.exports=router;