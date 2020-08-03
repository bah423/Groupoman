const Sequelise = require("sequelize")
const db = require ("../database/db.js")

module.exports = db.sequelize.define(
    "comment",
    {
        user_id: {
            type: Sequelise.INTEGER,
            primaryKey: false,
            autoIncrement: true
        },
        post_id: {
            type: Sequelise.INTEGER,
            primaryKey: false,
            autoIncrement: true
        },
        comments: {
            type: Sequelise.STRING
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
