const Sequelise = require("sequelize")
const db = require ("../database/db.js")

module.exports = db.sequelize.define(
    "user",
    {
        id: {
            type: Sequelise.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelise.STRING
        },
        email: {
            type: Sequelise.STRING
        },
        password: {
            type: Sequelise.STRING
        },
        role_id: {
            type: Sequelise.INTEGER
        },
        created_at: {
            type: Sequelise.DATE,
            defaultValue: Sequelise.NOW
        },
        updated_at: {
            type: Sequelise.DATE,
            defaultValue: Sequelise.NOW

        }
    },
    {
        timestamps: false
    }
)
