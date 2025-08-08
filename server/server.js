require("dotenv").config({path: __dirname + '/.env' }); // to load environment variables from .env file
const express = require("express");
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js")
const app = express();
const ConnectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware.js");
const cors =require('cors');

var corsOptions={
  origin:'http://localhost:5173',
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
  optionsSuccessStatus:200
}

app.use(cors(corsOptions));  // handling cors polices for working with multiple port mainly used for fronted and backend pairing connection
app.use(express.json()); // to parse JSON bodies

// mount the router to use the router in your main Express app,you can mount it at a specific url prefix:
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);


app.use(errorMiddleware);
// Exp1 
// for route
// app.get("/",(req,res)=>{
//     res.status(200).send("hello");
// });
// Exp2
// app.get("/register",(req,res)=>{
//     res.status(200).send("register here for application login");
// });



const port = 5000;
ConnectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at port :${port}`);
  });
});
