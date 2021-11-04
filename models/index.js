const User = require('./User');
const Allergy = require('./Allergy')

User.hasMany(Allergy, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Allergy.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Allergy };