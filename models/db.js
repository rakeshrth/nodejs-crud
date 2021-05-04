const mysql = require('mysql')
const dbConfig = require('../config/db.config')

//connection to database
const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
})

//opening the connection
connection.connect (error =>{
    if (error) {
        throw error
    } else {
        console.log("connected to database")
    }
})

module.exports = connection