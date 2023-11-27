//  changing 
import mongoose, { Schema } from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: "Companies" },
    jobTitle: { type: String, required: [true, "Job Title is required"] },
    jobType: { type: String, required: [true, "Job Type is required"] },
    location: { type: String, required: [true, "Location is required"] },
    salary: { type: Number, required: [true, "Salary is required"] },
    vacancies: { type: Number },
    experience: { type: Number, default: 0 },
    detail: [{ desc: { type: String }, requirements: { type: String } }],
    application: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobSchema);

export default Jobs;






















































//  first it was like this.. both are same almost


// import mongoose from 'mongoose';
// const jobSchema = new mongoose.Schema({

//     //  company,jobTitle, jobType,location,Salary,Vacancies,jobExpireDate
//     // company
//     company:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Companies'
//     },
//     // jobTitle
//     jobTitle:{
//         type:String,
//         required:[true,'Please enter job title']
//     },
//     // jobType
//     jobType:{
//         type:String,
//         required:[true,'Please enter job type']
//     },
//     // location
//     location:{
//         type:String,
//         required:[true,'Please enter job location']
//     },
//     // Salary
//     Salary:{
//         type:Number,
//         required:[true,'Please enter job salary']
//     },
//     // Vacancies
//     Vacancies:{
//         type:Number,
//         // required:[true,'Please enter job vacancies']
//     },
//     // erperience
//     experience:{
//         type:Number,
//         // required:[true,'Please enter job experience']
//         default:0
//     },
//     // description or detail
//     details:[
//         // desc and req 
//         {
//             desc:{
//                 type:String,
//                 required:[true,'Please enter job description']
//             },
//             requirements:{
//                 type:String,
//                 required:[true,'Please enter job requirements']
//             }
//         }
        
//     ],
//     // application
//     application:[
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref:'Users'
//         }
//     ]



// },
// {timestamps:true}
// );

// const Jobs = mongoose.model('Jobs',jobSchema);
// export default Jobs;



