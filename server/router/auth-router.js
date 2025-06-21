const express = require("express");
const authControl = require("../controllers/auth-contorller");
const {signInSchema,signUpSchema} = require("../validators/auth.validator");

const router =express.Router();
const validate = require("../middlewares/validate-middleware");

// app.get("/",(req,res)=>{
//     res.status(200).send("")
// })

// router.get("/",(req,res)=>{
    
// });


// there is another method for same operation done in above
// its most prefer one bcoz it gives the multiple functionaly for writing chaning and coonacatinatin post and othe rmathoda at the end 

// router.route("/").get((req,res)=>{
//     res.status(200).send("hey this is another mathod for route operation ")
// })

//for home page 
router.route("/").get(authControl.home);

//  for register page
router.route("/register").post(validate(signUpSchema),authControl.register);

router.route("/login").post(validate(signInSchema),authControl.login);


module.exports = router;