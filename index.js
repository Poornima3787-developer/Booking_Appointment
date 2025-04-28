const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const {sequelize}=require("./utils/db-connection");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',userRoutes);

sequelize.sync({force:true}).then(()=>{
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  })
}).catch((err) => {
  console.log("Error: " + err);
});

