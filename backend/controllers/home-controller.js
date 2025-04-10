const Employee = require('../models/employee-model');

exports.getHome = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.postHome = (req, res) => {
  Employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    image: req.body.image,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
