const cuid = require('cuid')

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customers',
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: () => cuid(),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {},
  )
  Customer.associate = () => {
    // associations can be defined here
  }
  return Customer
}
