import express from "express";
import { rateLimit } from "express-rate-limit";
import {
        getCompanyProfile, 
        register, 
        signIn,
        getCompanyJobListing,
        updateCompanyProfile,
        getCompanies,
        getCompanyById
       } from "../controllers/companiesController.js";
import userAuth from "../middleware/authMiddleware.js";
// import { get } from "mongoose";
//ip rate limit
const limiter = rateLimit({
  windowMs: 35 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const router = express.Router();
// Register routes
router.post("/register", limiter, register);
// router.post("/register",limiter, register);
router.post("/login", signIn);
// company by id


router.post("/get_company_Profile",userAuth,getCompanyProfile);
// router.post("/get-company",userAuth,getCompanyProfile);
router.post("/get_company_jobListing",userAuth,getCompanyJobListing);
// getting  companies


router.get("/",getCompanies);// this is working
router.get("/get-company/:id",getCompanyById);


router.put("/update-company",userAuth,updateCompanyProfile);


export default router;


// some change there
//  ye sahi tarha work ni kre rha
// router.get("/get-company/:id", getCompanyById);
// router.get("/get-company/:id", getCompanyById);

// router.get("/get-company/:id", getCompanyById);
// router.get("/get-company/:id", getCompanyById);
// update the company