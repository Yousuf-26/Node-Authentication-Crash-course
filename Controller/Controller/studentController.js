const allStudent = (req, res) => {
  res.send("<h1>This is for all students</h1>");
};

const deleteStudent = (req, res) => {
  console.log(req.params);

  const { id } = req.params;
  console.log(id);

  if (id == 10) {
    res.send("<h2>You cannot delete sumaya from your life</h2>");
  } else {
    res.send("<h1>You could delete this person</h1>");
  }
};

//exporting
module.exports = { allStudent, deleteStudent };
