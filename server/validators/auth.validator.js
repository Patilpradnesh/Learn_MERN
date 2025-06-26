const { sign } = require("jsonwebtoken");
const { z } = require("zod");

const signUpSchema = z.object({
  userName: z
    .string({ required_error: "UserName is required" })
    .trim()
    .min(3, {message: "Name must be at least of 3 chars" })
    .max(50, {message: "Name must be less than 50 char" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least of 3 character" })
    .max(25, {message: "Emial must be less than 50 char" }),

  phone: z
    .string({ required_error: "Phone number required" })
    .trim()
    .min(10, { message: "number must be minimum of 10 integers" })
    .max(15, { message: "number must be maximum 15 integer" }),

  password: z.string({ required_error: "password is required" })
    .trim()
    .min(6,{message:"password must be of minimum 10 character"})
    .max(16,{message:"password must be of maximum 16 character"}),
});


const signInSchema=z.object({

  email:z.string({requires_error:"Email must be required"})
  .trim()
  .email({message:"enter the valid email"})
  .min(5,{message:"there must be 5 character required"})
  .max(25,{message:"the email must be max upto 25 character only"}),

  password:z.string({required_error:"the password must required"})
  .trim()
  .min(6,{message:"password must be of minimum 6 character only"})
  .max(16,{message:"password must be maximum 16 character"}),

});

module.exports = {signUpSchema,signInSchema};