import mysql from 'mysql2'

export const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'root',
    database: 'social'
})
//admin
//kasunaws123