const { Sequelize, Model, DataTypes, Deferrable } = require("sequelize")
const sequelize = new Sequelize('sqlite::memory:')

const Order = sequelize.define('Order', {
    order_id: { type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
    usernames: { type: DataTypes.STRING, allowNull: false },
    order_total: { type: DataTypes.NUMBER },
    item: {
        item_id: { type: DataTypes.NUMBER, autoIncrement: true },
        product_id: { type: DataTypes.NUMBER },
        quantity: { type: DataTypes.NUMBER }
    }
})