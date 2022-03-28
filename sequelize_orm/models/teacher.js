'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  teacher.init({
    teacher_id: DataTypes.INTEGER(11),
    name: DataTypes.STRING(45),
    dept_id: DataTypes.INTEGER(11),
    subject_id: DataTypes.INTEGER(11),
    address: DataTypes.STRING(255),
  }, {
    sequelize,
    modelName: 'teacher',
  });
  return teacher;
};