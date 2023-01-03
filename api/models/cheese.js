"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cheese extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cheese.belongsTo(Location);
      Cheese.belongsToMany(User, { through: CheeseUsers });
    }
  }

  Cheese.init(
    {
      name: DataTypes.STRING,
      milkType: DataTypes.ARRAY(DataTypes.STRING),
      description: DataTypes.STRING,
      overallRating: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cheese",
    }
  );
  return Cheese;
};
