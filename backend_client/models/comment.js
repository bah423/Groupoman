const Sequelise = require("sequelize")
const db = require ("../database/db.js")

module.exports = db.sequelize.define(
    "comment",
    {
        id: {
            type: Sequelise.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelise.INTEGER
        },
        post_id: {
            type: Sequelise.INTEGER
        },
        comments: {
            type: Sequelise.TEXT
        },
        status: {
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
