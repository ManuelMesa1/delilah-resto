const { Sequelize, Model, DataTypes, Deferrable } = require("sequelize")
const sequelize = new Sequelize('sqlite::memory:')

const Product = sequelize.define('Product', {
    product_id: { type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
    product_name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.NUMBER, allowNull: false },
    product_brand: { type: DataTypes.STRING, allowNull: false }
})

module.exports = sequelize.model('Product', Product)