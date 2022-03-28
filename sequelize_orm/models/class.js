'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  class.init({
    name: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    class_mentor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'class',
  });
  return class;
};