export default (sequelize, Sequelize) => {
  const balances = sequelize.define('balances', {
    balance: {
      type: Sequelize.STRING,
      field: 'balance'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'balances'
  })
  return balances
}