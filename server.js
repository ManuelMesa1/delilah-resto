const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const config = require('./config')
const app = express()

app.use(bodyParser.json())

const mysql = require('mysql2')
const sequelize = new Sequelize(config.dbPath)

// JWT
const jwt = require('jsonwebtoken')


// CONTROLLERS
const usersController = require('./controllers/user')

// ROUTES
// USERS
app.post('/users', usersController.addUser) // Create a new User
app.get('/users')
app.get('/users')
app.patch('/users')
app.delete('/users')

// PRODUCTS

// ORDERS

app.listen(3307, () => {
    console.log('Server Up!')
})