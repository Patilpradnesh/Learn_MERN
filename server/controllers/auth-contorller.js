const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
// home page logic
const home = async (req, res) => {
  try {
    // res.status(200).send("world best MERN Devloper patil");
  } catch (error) {
    console.log(error);
  }
};  

const login=async(req,res)=>{


  try {
    const {email,password}=req.body;
    const userExist = await User.findOne({email});
    console.log(userExist);
    if(!userExist){
      return res.status(400).json({msg:"invalid one"})
    }
   
    // comparing password that stored in data base with user login time password
    // const user = await bcrypt.compare(password,userExist.password);
    const user = await userExist.comparePassword(password);
    if(user){
      res.status(200).json({
        msg:"login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });

    }else{
      res.status(401).json({error:"unable to login"});
    }

  } catch (error) {
    res.status(500).json({error:"Internal server error",msg:error.message});
  }
}



const register = async (req, res) => {
  try {
    console.log(req.body);
    const { userName, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email Already Exist"});
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);
    /*
    for this method there is another method use in auth-model.js for bcrypt the password for hiding it so it use pre method 
    and here for this upper merthod we need to giive that hash_password name  to password value of out set given in user cerated like(password:hash_password)   
    */

    const userCreated = await User.create({ userName, email, phone, password });
    res
      .status(201)
      .json({
        message:"Registration successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

// user logic  to get the data on frontend side 

const user = async(req,res)=>{
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
  } catch (error) {
    console.log(error);
    res.status(500).json({meg:"Invalid operation"});
  }
}

module.exports = { home,register,login,user };
