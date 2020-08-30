const order = require('../models/order')
const Sequelize = require('sequelize')
const config = require('../config')
const sequelize = new Sequelize(config.dbPath)

async function addOrder(req, res) {
    try {
        const { username, order_total, item } = req.body
        const data = await sequelize.query('INSERT INTO orders (username, order_total, item) VALUES (?, ?, ?)', { replacements: [username, order_total, item] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getOrders(req, res) {
    try {
        const data = await sequelize.query('SELECT * FROM orders', { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function requestOrder(req, res) {
    try {
        const id = req.params.id
        const data = await sequelize.query('SELECT * FROM orders WHERE id = ?', { replacements: [id], type: sequelize.QueryTypes.SELECT })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateOrder(req, res) {
    try {
        const { username, order_total, item } = req.body
        const data = await sequelize.query('UPDATE orders SET usernames = ?, order_total = ?, item = ? WHERE username = ?', { replacements: [order_total, item, username] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function removeOrder(req, res) {
    try {
        const id = req.params.id
        const data = await sequelize.query('DELETE FROM orders WHERE id = ?', { replacementes: [id] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { addOrder, getOrders, requestOrder, updateOrder, removeOrder }