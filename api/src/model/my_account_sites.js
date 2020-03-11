export default (sequelize, Sequelize) => {
  const my_account_sites = sequelize.define('my_account_sites', {
    account_name: {
      type: Sequelize.STRING,
      field: 'account_name'
    },
    account_number: {
      type: Sequelize.STRING,
      field: 'account_number'
    },
    bank_name: {
      type: Sequelize.INTEGER,
      field: 'bank_name'
    },
    minimum_amount: {
      type: Sequelize.ENUM,
      values: ['show', 'hidden'],
      field: 'minimum_amount'
    },
    status: {
      type: Sequelize.INTEGER,
      field: 'status'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'my_account_sites'
  })
  return my_account_sites
}