const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const Sequelize = require('sequelize')
const config = require('./config')
const jwt = require('jsonwebtoken')
const sequelize = config.dbPath

const app = express()
app.use(bodyParser.json())

// CONTROLLERS

// ROUTES

app.listen(3307, () => {
    console.log('Server Up!')
})