const { Sequelize, Model, DataTypes, Deferrable } = require("sequelize")
const sequelize = new Sequelize('sqlite::memory:')

const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.NUMBER, allowNull: false },
    admin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
})

module.exports = sequelize.model('User', User)