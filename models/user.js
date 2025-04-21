const {DataTypes}=require("sequelize");
const sequelize=require('../utils/db-connection');

const user=sequelize.define('user',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
  name:DataTypes.STRING,
  phone:DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  }
})

module.exports=user;
