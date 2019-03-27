const express = require('express')
const customerController = require('../controllers/customerController')
const {
  validateCustomer,
  validateCustomerId,
} = require('../middleware/customerMiddleware')

const customerRouter = express.Router()

const router = () => {
  customerRouter.route('/search').get(customerController.findByNameOrPhone)

  customerRouter
    .route('/')
    .get(customerController.getAllCustomers)
    .post(validateCustomer, customerController.addCustomer)

  customerRouter.use('/:customerId', validateCustomerId)

  customerRouter
    .route('/:customerId')
    .get(validateCustomerId, customerController.findByID)
    .put(validateCustomerId, customerController.updateCustomer)
    .delete(validateCustomerId, customerController.deleteCustomer)

  return customerRouter
}

module.exports = router
