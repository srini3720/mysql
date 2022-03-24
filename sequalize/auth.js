const Sequelize = require("sequelize");

const path = "mysql://root:rootadmin3720@localhost:3306/student_sequalize";

const sequelize = new Sequelize(path);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Student = sequelize.define("student", {
  name: Sequelize.STRING,
  class: Sequelize.STRING,
  roll_no: Sequelize.INTEGER,
  address: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  email: Sequelize.STRING,
  description: Sequelize.STRING,
});
async function createTable() {

  Student.sync()
    .then(() => {
      console.log("New table created");
    })
    .finally(() => {
      sequelize.close();
    });
}
// createTable();
async function deleteTable() {
  const student = await Student.drop()
    .then(() => {
      console.log("table deleted");
    })
    .finally(() => {
      sequelize.close();
    });
}
// deleteTable();

//add Student data (INSERT)
async function addStudent() {
  const student = Student.build({
    name: "Rajesh",
    class: "10th",
    roll_no: 1,
    address: "Kathmandu",
    phone: 9847897,
    email: "rajesh@gmail.com",
    description: "Good",
  });
  await student
    .save()
    .then(() => {
      console.log("Student added");
    })
    .finally(() => {
      sequelize.close();
    });
}
// addStudent();

//delete Student data (DELETE)
async function deleteRow() {

  let n = await Student.destroy({ where: { id: 1 } });
  console.log(`number of deleted rows: ${n}`);

  sequelize.close();
}
deleteRow();

//update Student data (UPDATE)
async function updateRow() {

  let id = await Student.update(
      { description: 'updated' },
      { where: { id: 1 } });
  sequelize.close();
}

updateRow();

//findByPk(id)
Student.findByPk(1).then((student)=>{
  console.log("Student found");
  console.log(`Id: ${student.id} name: ${student.name}`);
}).finally(() => {
  sequelize.close();
})

