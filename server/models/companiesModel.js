// import { Schema } from 'mongoose';
// import validator from 'validator';
// import bcrypt from 'bcryptjs';
// import JWT from 'jsonwebtoken';


// const companySchema = new Schema({

//     name: {
//         type: String,
//         required: [true, 'Please enter your Company name'],
//         // trim: true,
//         // maxLength: [30, 'Your first name cannot exceed 30 characters']
//     },
//     // email
//     email: {
//         type: String,
//         required: [true, 'Please enter your email'],
//         unique: true,
//         validate: [validator.isEmail, 'Please enter valid email address']
//     },
//     // password
//     password: {
//         type: String,
//         required: [true, 'Please enter your password'],
//         minLength: [6, 'Your password must be longer than 6 characters'],
//         select: true
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
    
   
//     // about
//     about:{
//         type:String,
//         // default:''
//     },
//     // contact
//     contact:{
//         type:String,
//         // default:''
//     },
//     // job posted
//     jobPosts:[
//         {
//             type: Schema.Types.ObjectId,
//             ref:'Jobs'
//         }
//     ]
    


// });



// //  methods or functions here
// // encrypt password
// companySchema.pre('save', async function () {
//     if (!this.isModified) return;
//     const salt = await bcrypt.genSalt(12);
//     // encrypt password
//     this.password = await bcrypt.hash(this.password, salt);
// });

// //  compare password
// companySchema.methods.comparePassword = async function (companyPassword) {
    
//     const match = await bcrypt.compare(companyPassword, this.password);
//     return match;


// };

// // JWT token
// companySchema.methods.createJWT =  async function () {
//     return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
//         expiresIn:"2d"
//     });
// };



// // export model
// const companies = mongoose.model('companies', companySchema);
// export default companies;









//  changing
import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const companySchema = new Schema({
  name: {
    type: String,
    required: [true, "Company Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least"],
    select: true,
  },
  contact: { type: String },
  location: { type: String },
  about: { type: String },
  profileUrl: { type: String },
  jobPosts: [{ type: Schema.Types.ObjectId, ref: "Jobs" }],
});

// middelwares
companySchema.pre("save", async function () {
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
companySchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//JSON WEBTOKEN
companySchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

const Companies = mongoose.model("Companies", companySchema);

export default Companies;