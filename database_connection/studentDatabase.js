var studentdb = require("./db/db");

const getstudent = () => {
  return studentdb.student;
};

const createstudent = (body) => {
  studentdb.student.push(body);
  return studentdb.student;
};

const updatestudent = (id, body) => {
  const student = studentdb.student.find((std) => std.id == id);
  const index = studentdb.student.indexOf(student);
  if (student) {
    studentdb.student[index].name = body.name;
    studentdb.student[index].RollNo = body.RollNo;
  }
  return studentdb.student;
};

const deletestudent = (id) => {
  const isStudent = studentdb.student.find((std) => std.id == id);
  const index = studentdb.student.indexOf(isStudent);
  if (isStudent) {
    studentdb.student.splice(index, 1);
  }
  return studentdb.student;
};
module.exports = { getstudent, createstudent, updatestudent, deletestudent };
