const User=require('../models/user');

exports.addEntries=async (req,res)=>{
  try{
    const {name,email,phone,appointmentDate}=req.body;
    const user = await User.create({
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

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({error:error.message});
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({
       where: { 
        id:id 
      } });
    if (deleted === 0) {
      return res.status(404).send("User not found.");
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
