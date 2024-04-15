import mysql from 'mysql'

export const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'root',
    database: 'social'
})
//admin
//kasunaws123