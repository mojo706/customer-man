const { Customers } = require('../models')

const addCustomer = async (req, res) => {
  const [newCustomer, created] = await Customers.findOrCreate({
    where: req.body,
    defaults: req.body,
    plain: true,
  })
  if (created) {
    res.status(201).json(newCustomer)
    return
  }
  res.status(409).json({
    message: 'That user already exists',
  })
}

const getAllCustomers = async (req, res) => {
  const customers = await Customers.findAll()
  res.status(200).json(customers)
}

const findByID = async (req, res) => {
  const { customer } = res.locals
  res.status(200).json(customer)
}

const findByNameOrPhone = async (req, res) => {
  let found
  const params = req.query
  if (!params.name && !params.phone) {
    return res.status(400).json({
      message: 'Please enter valid search params',
    })
  }
  if (params.name && !params.phone) {
    found = await Customers.findOne({
      where: { name: params.name },
    })
    return res.status(200).json(found)
  }
  found = await Customers.findOne({
    where: { phone: params.phone },
  })
  return res.status(200).json(found)
}

const updateCustomer = async (req, res) => {
  const { customer } = res.locals
  await customer.update(req.body)
  res.status(200).json(customer)
}

const deleteCustomer = async (req, res) => {
  const { customer } = res.locals
  await customer.destroy()
  res.status(200).json({
    message: 'That user has been deleted',
  })
}

module.exports = {
  addCustomer,
  getAllCustomers,
  findByID,
  findByNameOrPhone,
  updateCustomer,
  deleteCustomer,
}
