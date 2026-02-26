const express = require("express");
const app = express();
const envData = require("./utils/envData");
const path = require("node:path");
const userRoute = require("./routes/userRoutes");
const PORT = envData.config.PORT;

//MiddleWare
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

app.use("/",userRoute);

app.listen(PORT,()=>{
    console.log(`The App is listening in Port ${PORT}`);
});



