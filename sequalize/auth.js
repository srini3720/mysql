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
// .finally(() => {
//   sequelize.close();
// });

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
createTable();
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
