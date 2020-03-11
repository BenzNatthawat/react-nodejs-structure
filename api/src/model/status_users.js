export default (sequelize, Sequelize) => {
  const status_users = sequelize.define('status_users', {
    status: {
      type: Sequelize.STRING,
      field: 'status'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'status_users'
  })
  return status_users
}