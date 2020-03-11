export default (sequelize, Sequelize) => {
  const myfunds = sequelize.define('myfunds', {
    balance: {
      type: Sequelize.DECIMAL,
      field: 'amount'
    },
    status: {
      type: Sequelize.ENUM,
      values: ['wait', 'finish', 'confirm', 'no'],
      field: 'status'
    },
    deposit_and_withdraw: {
      type: Sequelize.ENUM,
      values: ['deposit', 'withdraw'],
      field: 'deposit_and_withdraw'
    },
    users_id: {
      type: Sequelize.INTEGER,
      field: 'users_id'
    },
    admins_id: {
      type: Sequelize.INTEGER,
      field: 'admins_id'
    },
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'myfunds'
  })
  myfunds.associate = function (models) {
    myfunds.belongsTo(models.users, {
      foreignKey: 'users_id',
      sourceKey: 'id'
    })
  }
  return myfunds
}