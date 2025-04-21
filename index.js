const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const sequelize=require("./utils/db-connection");
app.use(cors());
app.use(express.json());

app.use('/api',userRoutes);

sequelize.authenticate().then(() => {
  console.log("Database connected!");
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}).catch((err) => {
  console.log("Error: " + err);
});
