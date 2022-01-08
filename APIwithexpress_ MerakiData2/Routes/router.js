const express = require("express");
const router = express.Router();
const {GetCourse,CoursefindbyId,postCourse,UpdateCourse,DeletCourse}=require("../controller/data.controller")

router.get("/api/courses",GetCourse);
router.post("/api/courses",postCourse);
router.get("/api/courseById/:id",CoursefindbyId);
router.put("/api/coursesById",UpdateCourse);
router.delete("/api/coursesById",DeletCourse);



module.exports = router;
