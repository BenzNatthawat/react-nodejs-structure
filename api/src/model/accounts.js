export default (sequelize, Sequelize) => {
  const accounts = sequelize.define('accounts', {
    account_number: {
      type: Sequelize.STRING,
      field: 'account_number'
    },
    bank_name: {
      type: Sequelize.STRING,
      field: 'bank_name'
    },
    users_id: {
      type: Sequelize.STRING,
      field: 'users_id'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'accounts'
  })
  // accounts.associate = function (models) {
  //   accounts.belongsTo(models.users, {
  //     foreignKey: {
  //       name: 'users_id'
  //     }
  //   })
  // }
  return accounts
}