const Joi = require('joi')
const { Customers } = require('../models')

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

const validateUserId = async (req, res, next) => {
  if (!req.params.userId) {
    res.status(400).json({
      message: 'userId is missing!',
    })
    return
  }
  const customer = await Customers.findById(req.params.userId)
  if (!customer) {
    res.status(404).json({ message: 'A User with that userId does not exist' })
    return
  }
  next()
}

module.exports = { validateCustomer, validateUserId }
