import { Router } from "express";
import { schoolController } from "../controller/school.controller.js";


const router = Router();


router.route("/healthcheck").get(schoolController.healthCheck);

router.route("/school").post(schoolController.createSchool);

router.route("/getAllSchools").get(schoolController.getAllSchools);



export default router