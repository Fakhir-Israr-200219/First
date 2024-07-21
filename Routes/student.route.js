const studentController = require("../Controller/student.controller");
const express = require("express")

const router = express.Router();

router.get("/",studentController.getAllStudent);
router.post("/",studentController.addStudent);
router.get("/:id",studentController.getStudentById);
router.put("/:id",studentController.updateStudent);
router.delete("/:id",studentController.deleteStudent);

module.exports = router;