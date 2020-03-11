export default (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    user_name: {
      type: DataTypes.STRING,
      field: 'user_name'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'
    },
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    telephone: {
      type: DataTypes.STRING,
      field: 'telephone'
    },
    user_role_id: {
      type: DataTypes.INTEGER,
      field: 'user_role_id'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'users'
  })
  users.associate = function (models) {
    users.hasOne(models.accounts, {
      foreignKey: 'users_id',
      sourceKey: 'id'
    })
    users.belongsTo(models.user_roles, {
      foreignKey: 'user_role_id',
      sourceKey: 'id'
    })
    users.belongsTo(models.status_users, {
      foreignKey: 'status_users_id',
      sourceKey: 'id'
    })
    users.belongsTo(models.balances, {
      foreignKey: 'balance_id',
      sourceKey: 'id'
    })
    users.hasMany(models.myfunds, {
      foreignKey: 'users_id',
      sourceKey: 'id'
    })
  }
  return users
}