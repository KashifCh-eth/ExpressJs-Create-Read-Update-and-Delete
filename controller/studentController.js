const {
  getstudent,
  createstudent,
  updatestudent,
  deletestudent,
} = require("../database_connection/studentDatabase");

const getStudent = (req, res) => {
  const Students = getstudent();
  res.send(Students);
};

const createStudent = (req, res) => {
  const body = req.body;
  const create = createstudent(body);
  res.send(create);
};

const updateStudent = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const update = updatestudent(id, body);
  res.send(update);
};

const deleteStudent = (req, res) => {
  const id = req.params.id;
  const deleteSt = deletestudent(id);
  res.send(deleteSt);
};

module.exports = { getStudent, createStudent, updateStudent, deleteStudent };
