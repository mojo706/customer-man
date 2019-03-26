const { Customers } = require('../models')

const addCustomer = async (req, res) => {
  const [newUser, created] = await Customers.findOrCreate({
    where: req.body,
    defaults: req.body,
    plain: true,
  })
  if (created) {
    res.status(201).json(newUser)
    return
  }
  res.status(409).json({
    message: 'That user already exists',
  })
}

const updateCustomer = async (req, res) => {
  const user = await Customers.findById(req.params.userId)
  await user.update(req.body)
  res.status(200).json(user)
}

const deleteCustomer = async (req, res) => {
  const user = await Customers.findById(req.params.userId)
  await user.destroy()
  res.status(200).json({
    message: 'That user has been deleted',
  })
}

module.exports = { addCustomer, updateCustomer, deleteCustomer }
