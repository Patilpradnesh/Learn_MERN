const Contact =require("../models/contact-model")

const ContactForm =async(req,res)=>{
  try {
    const response =req.body;
    await Contact.create(response);
    return res.status(200).json({message:"message send successfully"});

  } catch (error) {
    console.log(error);
    res.status(500).json({error:"message not delivered"});
  }
}

module.exports = ContactForm;