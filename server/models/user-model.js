const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");


const  userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    isAdmin:{
        type:Boolean,
        default:false

    },

});
// hash the password before saving the user
userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified("password")){
        return next();
    }
    try{
       const saltRound = await bcrypt.genSalt(10);
       const hash_password =await bcrypt.hash(user.password,saltRound);
       user.password=hash_password;
       next();

    }catch(error){
       next(error);
    }
});

// json web token create secure token for data
userSchema.methods.generateToken= async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email: this.email,
            isAdmin:this.isAdmin
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn:"30d",
        }
        );
    } catch (error) {
      console.error(error);  
    }
};
// bcrypt method is use for compare the password 
userSchema.methods.comparePassword =async function(password){
    try {
        return bcrypt
        .compare(password,this.password);
    } catch (error) {
       console.log(error); 
    }
};

const User =new mongoose.model("User",userSchema);
module.exports = User;