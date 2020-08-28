const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const Sequelize = require('sequelize')
const sequelize = new Sequelize()
const app = express()

app.listen(3306, () => {
    console.log('Server Up!')
})