const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Allergy extends Model {}

Allergy.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      // primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Allergy',
  }
);

module.exports = Allergy;