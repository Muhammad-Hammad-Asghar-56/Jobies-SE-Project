import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createJob,deleteJobPost,getJobById,getJobPosts,updateJob } from "../controllers/jobController.js";
const router = express.Router();
// post job
router.post("/upload-job", userAuth, createJob);
// update job
router.put("/update-job/:jobId", userAuth, updateJob);
// Get job Post
router.get("/find-jobs",  getJobPosts);//ismy bi auth ni ata.. erorr resolver here
// Get job by id
// router.get("/get-jobs-detail/:jobId", userAuth, getJobById);
// again testing
router.get("/get-job-detail/:id", getJobById);
//  delete the job
router.delete("/delete-job/:id", userAuth, deleteJobPost);
//  
export default router;


