// import mongoose from 'mongoose';
// import validator from 'validator';
// import bcrypt from 'bcryptjs';
// import JWT from 'jsonwebtoken';

// const userSchema = new mongoose.Schema({

//     // first name required
//     firstName: {
//         type: String,
//         required: [true, 'Please enter your first name'],
//         // trim: true,
//         // maxLength: [30, 'Your first name cannot exceed 30 characters']
//     },
//     // last name required
//     lastName: {
//         type: String,
//         required: [true, 'Please enter your last name'],
//         // trim: true,
//         // maxLength: [30, 'Your last name cannot exceed 30 characters']
//     },
//     // email with validate
//     email: {
//         type: String,
//         required: [true, 'Please enter your email'],
//         unique: true,
//         validate: [validator.isEmail, 'Please enter valid email address']
//     },
//     // password required
//     password: {
//         type: String,
//         required: [true, 'Please enter your password'],
//         minLength: [6, 'Your password must be longer than 6 characters'],
//         select: true
//     },
//     accountType:{
//         type:String,
//         // enum:['user','admin'],
//         default:'seeker'
//     },
//     // contact,location,profileUrl,jobTitle,about
//     contact:{
//         type:String,
//         // default:''
//     },
//     // location
//     location:{
//         type:String,
//         // default:''
//     },

//     // profileUrl
//     profileUrl:{
//         type:String,
//         // default:''
//     },
//     // jobTitle
//     jobTitle:{
//         type:String,
//         // default:''
//     },
//     // about
//     about:{
//         type:String,
//         // default:''
//     },



//     }
//     // timestamp true
//     , { timestamps: true }
      

// );

// //  we need some methods here
// userSchema.pre('save', async function () {
//     if (!this.isModified()) return ;
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// // compare password
// userSchema.methods.comparePassword = async function (userPassword) {
//     const match = await bcrypt.compare(userPassword, this.password);
//     return match;
// };

// //  json tokken
// // JWT token

// userSchema.methods.createJWT =  async function () {
//     return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
//         // expiresIn: process.env.JWT_EXPIRES_IN
//         expiresIn:"1d"

//     });
// }

// const Users= mongoose.model('Users', userSchema);

// export default Users;





//  changing
// import mongoose from "mongoose";

import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is Required!"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Required!"],
    },
    email: {
      type: String,
      required: [true, " Email is Required!"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
      minlength: [6, "Password length should be greater than 6 character"],
      select: true,
    },
    accountType: { type: String, default: "seeker" },
    contact: { type: String },
    location: { type: String },
    profileUrl: { type: String },
    cvUrl: { type: String },
    jobTitle: { type: String },
    about: { type: String },
  },
  { timestamps: true }
);

// middelwares
userSchema.pre("save", async function () {
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//JSON WEBTOKEN
userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

const Users = mongoose.model("Users", userSchema);

export default Users;