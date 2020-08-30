const Product = require('../models/product')
const Sequelize = require('sequelize')
const config = require('../config')
const sequelize = new Sequelize(config.dbPath)

async function addProduct(req, res) {
    try {
        const { product_name, price, product_brand } = req.body
        const data = await sequelize.query('INSERT INTO products VALUES(product_name, price, product_brand)VALUES(?, ?, ?)', { replacements: [product_name, price, product_brand] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getProducts(req, res) {
    try {
        const data = await sequelize.query('SELECT * FROM products', { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function requestProduct(req, res) {
    try {
        const id = req.params.id
        const data = await sequelize.query('SELECT * FROM products WHERE id = ?', { replacements: [id], type: sequelize.QueryTypes.SELECT })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateProduct(req, res) {
    try {
        const { product_id, product_name, price, product_brand } = req.body
        const data = await sequelize.query('UPDATE products SET product_name = ?, price = ?, product_brand = ? WHERE product_id = ?', { replacements: [product_name, price, product_brand, product_id] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function removeProduct(req, res) {
    try {
        const id = req.params.id
        const data = await sequelize.query('DELETE FROM products WHERE id = ?', { replacements: [id] })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { addProduct, getProducts, requestProduct, updateProduct, removeProduct }