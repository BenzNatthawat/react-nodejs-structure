export default (sequelize, DataTypes) => {
  var user_roles = sequelize.define('user_roles', {
    role_name: {
      type: DataTypes.STRING,
      field: 'role_name'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'user_roles'
  })
  user_roles.associate = function (models) {
    user_roles.hasOne(models.users, {
      foreignKey: {
        name: 'id'
      }
    })
  }
  return user_roles
}
