const express = require('express')
const customerController = require('../controllers/customerController')
const {
  validateUser,
  validateUserId,
} = require('../middleware/customerMiddleware')

const userRouter = express.Router()

const router = () => {
  userRouter.route('/').post(validateUser, customerController.addCustomer)

  userRouter.use('/:userId', validateUserId)

  userRouter
    .route('/:userId')
    .put(validateUser, customerController.updateCustomer)
    .delete(customerController.deleteCustomer)
  return userRouter
}

module.exports = router
