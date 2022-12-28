"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CheeseUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CheeseUser.init(
    {
      userId: DataTypes.INTEGER,
      cheeseId: DataTypes.INTEGER,
      favorite: DataTypes.BOOLEAN,
      saved: DataTypes.BOOLEAN,
      rating: DataTypes.INTEGER,
      notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CheeseUser",
    }
  );
  return CheeseUser;
};
