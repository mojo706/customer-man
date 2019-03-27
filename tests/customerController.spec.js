const request = require('supertest')
const express = require('express')
const models = require('../src/models')
const mockData = require('./mockData')

let customerId

const setupApp = require('../src')

const app = express()

const server = setupApp(app)
describe('Customer Controller', () => {
  beforeEach(async done => {
    await models.Customers.destroy({
      where: {},
      truncate: true,
    })
    request(server)
      .post('/api/customers/')
      .send(mockData.payload)
      .end((err, res) => {
        customerId = res.body.id
        done()
      })
  })

  afterEach(async done => {
    await models.Customers.destroy({
      where: {},
      truncate: true,
    })
    done()
  })
  test('Should add a customer', async done => {
    request(server)
      .post('/api/customers/')
      .send(mockData.addCustomerPayload)
      .end((err, res) => {
        expect(res.status).toBe(201)
        done()
      })
  })

  test('Should update a customer', async done => {
    request(server)
      .put(`/api/customers/${customerId}`)
      .send(mockData.updateCustomerPayload)
      .end((err, res) => {
        expect(res.status).toBe(200)
        done()
      })
  })

  test('Should delete a customer', async done => {
    request(server)
      .delete(`/api/customers/${customerId}`)
      .end((err, res) => {
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('That user has been deleted')
        done()
      })
  })

  test('Should retrieve a customer by ID', async done => {
    request(server)
      .get(`/api/customers/${customerId}`)
      .end((err, res) => {
        expect(res.status).toBe(200)
        done()
      })
  })

  test('Should retrieve all customers', async done => {
    request(server)
      .get(`/api/customers`)
      .end((err, res) => {
        expect(res.status).toBe(200)
        expect(res.body[0].name).toBe('Con Doe')
        done()
      })
  })
})
