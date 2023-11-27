import express from "express";
import authRoute from "./authRoute.js";
import userRout from "./userRoutes.js";
import companyRoute from "./companiesRoutes.js";
import jobRoute from "./jobRoutes.js";

const router = express.Router();

router.use(`/auth`, authRoute);
router.use('/users', userRout);
// router.use('/user', userRout);// i made change here
router.use('/company', companyRoute);
router.use('/companies', companyRoute);// ye rout creat kia tha tab ja ker masla hal hoa tha companies wala
//  isks aik hal ye bhi ho skta ha ka me component  ka path ka name hi company rkh lon
// testing ka lia saray hi dal dia hein ta ka koi naa koi to chaly ga na

router.use('/job', jobRoute);
router.use('/jobs', jobRoute);
router.use('/jonPosts',jobRoute);// isko meny lagya ha dekhny k lia

export default router;
