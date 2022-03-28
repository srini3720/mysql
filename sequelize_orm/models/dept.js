'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dept.belongsTo(models.teacher);
      models.teacher.hasMany(dept);
    }
  }
  dept.init({
    dept_id: DataTypes.INTEGER(11),
    name: DataTypes.STRING(45),
    course_code: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'dept',
  });
  return dept;
};