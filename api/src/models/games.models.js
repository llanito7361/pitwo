const { Sequelize, DataTypes } = require("sequelize")

module.exports = (instanciaDeSequelize) => {
    instanciaDeSequelize.define('Games',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
}