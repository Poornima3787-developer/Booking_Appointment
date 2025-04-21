const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('booking_app','root','Poornima@3787',{
  host:"localhost",
  dialect:"mysql",
})

module.exports=sequelize;