import mysql from 'mysql'

export const connection = mysql.createConnection({
    host: 'social-application.cnqwi46ua7b7.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'kasunaws56',
    database: 'social'
})
//admin
//kasunaws123