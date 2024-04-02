import { connection } from "../connect.js"
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?"
    connection.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length === 0) return res.status(404).json("user does not exists")

        const checkPassword = bcryptjs.compareSync(req.body.password, data[0].password)
        if (!checkPassword) {
            return res.status(400).json("wrong username or password")
        }
        const token = jwt.sign({ id: data[0].id }, "secretKey")
        const { password, ...others } = data[0]
        res.cookie("accessToken", token, {
            httpOnly: true,
            sameSite: "none"
        }).status(200).json(others)

    })
}

export const register = (req, res) => {
    //check if username exists
    const q = "SELECT * FROM users WHERE username = ?"
    connection.query(q, [req.body.username], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        }
        if (data.length) {
            return res.status(409).json("user already exists")
        }
    })

    //create user
    const salt = bcryptjs.genSaltSync(10)
    const hashedPassword = bcryptjs.hashSync(req.body.password, salt)
    const query = "INSERT INTO users (username,email,password,name) VALUES (?)"
    const values = [req.body.username, req.body.email, hashedPassword, req.body.name]
    connection.query(query, [values], (err, data) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json("user created successfully")
    })
}
export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("user have been logged out")
}