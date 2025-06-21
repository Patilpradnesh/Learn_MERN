const express =require("express");
const router=express.Router();
const ContactForm =require("../controllers/contact-controller")
 


router.route("/Contact").post(ContactForm);

module.exports =router;