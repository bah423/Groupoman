const Sequelise = require("sequelize")
const db = require ("../database/db.js")

module.exports = db.sequelize.define(
    "post",
    {
        id: {
            type: Sequelise.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        labels: {
            type: Sequelise.STRING
        },
        slug: {
            type: Sequelise.STRING
        },
        description: {
            type: Sequelise.STRING
        },
        post_type: {
            type: Sequelise.INTEGER
        },
        path: {
            type: Sequelise.STRING
        },
        status: {
            type: Sequelise.INTEGER
        },
        user_id: {
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
