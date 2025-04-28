const {Sequelize}=require('sequelize');
const mysql=require('mysql2');

const sequelize=new Sequelize('testSql','root','Poornima@3787',{
  host:"localhost",
  dialect:"mysql",
})

const connectiondb=async()=>{
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been created");
  } catch (error) {
    console.log(error);
  }
}

module.exports={sequelize,connectiondb};