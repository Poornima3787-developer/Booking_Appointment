const user=require('../models/user');

const addEntries=async (req,res)=>{
  try{
    const {name,email,phone,appointmentDate}=req.body;
    const user = await user.create({
      name:name,
      email:email,
      phone:phone,
      appointmentDate:appointmentDate
    });
    res.status(201).json(user);

  } catch(error){
     res.status(500).json({error:error.message});
  }
 
};

const getAllUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({error:error.message});
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await user.destroy({ where: { id } });
    if (deleted === 0) {
      return res.status(404).send("User not found.");
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={
  addEntries,
  getAllUsers,
  deleteUser
}
