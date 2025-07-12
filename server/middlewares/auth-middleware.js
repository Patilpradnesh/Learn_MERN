const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
//  this middleware is used to check the user is authenticated or not
  const token = req.header("Authorization");// Authorization header is used to send the token from client side
  console.log("Token from auth middleware:", token);


// if the token is not present in the request header then it will return 401 status code
  // and send the message "No token provided"
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
 
// it use to remove the Bearer from the token string and  trim any extra spaces
// so that we can use the token for verification
  const jwtToken=token.replace("Bearer","").trim();
   console.log("Token from auth middleware :", jwtToken);
  try {
    const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
    console.log("isVerified:", isVerified);
     

    
    const userData =await User.findOne({email:isVerified.email}).select({password:0});
    console.log(userData);
      // custom property to the request object
    req.user = userData;
    req.token=token;
    req.userId=userData._id;
    
    next();
  } catch (error) {
    console.log(`Error in auth middleware: ${error.message}`);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports=authMiddleware;