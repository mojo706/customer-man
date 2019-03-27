const Joi = require('joi')
const { Customers } = require('../models/index')

const schema = {
  name: Joi.string().required(),
  phone: Joi.string().required(),
}

const validateCustomer = (req, res, next) => {
  Joi.validate(req.body, schema, error => {
    if (error) {
      res.status(400).json({ message: error.details[0].message })
      return
    }
    next()
  })
}

const validateCustomerId = async (req, res, next) => {
  if (!req.params.customerId) {
    res.status(400).json({
      message: 'customerId is missing!',
    })
    return
  }
  const customer = await Customers.findByPk(req.params.customerId)
  if (!customer) {
    res
      .status(404)
      .json({ message: 'A user with that customerId does not exist' })
    return
  }
  res.locals.customer = customer
  next()
}

module.exports = { validateCustomer, validateCustomerId }
