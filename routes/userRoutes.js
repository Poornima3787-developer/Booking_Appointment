const express=require('express');
const {addEntries,getAllUsers,deleteUser}=require('../controllers/userController');
const router=express.Router();

router.post("/users",addEntries);
router.get("/users", getAllUsers);
router.delete("/users/:id",deleteUser);

module.exports=router;