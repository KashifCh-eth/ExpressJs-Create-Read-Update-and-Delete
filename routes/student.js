var express = require("express");
var router = express.Router();
const {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/studentController");

router.get("/getstudent", getStudent);
router.post("/createstudent", createStudent);
router.put("/updatestudent/:id", updateStudent);
router.delete("/deletestudent/:id", deleteStudent);

module.exports = router;
