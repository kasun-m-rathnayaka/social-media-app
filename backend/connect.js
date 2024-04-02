import mysql from 'mysql'

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'root',
    database: 'social'
})
//admin
//kasunaws123