'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marksheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  marksheet.init({
    student_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER,
    mark: DataTypes.INTEGER,
    rank: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'marksheet',
  });
  return marksheet;
};