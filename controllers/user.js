const User = require('../models/user')
const Sequelize = require('sequelize')
const config = require('../config')
const sequelize = new Sequelize(config.dbPath)

async function addUser(req, res) {
    try {
        const { username, password, email, address, firstname, lastname, phone, admin } = req.body
        const data = await sequelize.query('INSERT INTO users(username, password, email, address, firstname, lastname, phone, admin) VALUES(?,?,?,?,?,?,?,?)', { replacementes: [username, password, email, address, firstname, lastname, phone, admin] })
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getUsers(req, res) {
    try {
        const data = await sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function requestUser(req, res) {
    try {
        const id = req.params.id
        const data = await sequelize.query('SELECT * FROM users WHERE _id = ?', { replacementes: [id], type: sequelize.QueryTypes.SELECT })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateUser(req, res) {
    try {
        const { id, username, password, email, address, firstname, lastname, phone } = req.body
        const data = await sequelize.query('UPADATE users SET username = ?, password = ?, email = ?, firstname = ?, lastname = ?, phone = ? WHERE id = ?', { replacementes: [username, password, email, firstname, lastname, phone, id] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function removeUser(req, res) {
    try {
        const id = req.params.id
        const data = await sequelize.query('DELETE FROM users WHERE id = ?', { replacementes: [id] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { addUser, getUsers, requestUser, updateUser, removeUser }