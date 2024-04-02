import { connection } from "../connect.js"
import moment from "moment/moment.js"

export const getComment = (req, res) => {
    const q = "select u.id as userId, name, profilepic, c.id as commentId,c.desc,c.createdAt from users as u join comments as c on(u.id = c.userId) where c.postId = ? order by c.createdAt desc"
    connection.query(q, [req.query.postId], (err, data) => {
        if (err) { return res.status(500).json(err) }
        return res.status(200).json(data)
    })
}

export const addComment = (req, res) => {
    const q = "INSERT INTO `comments` (`desc`,`createdAt`,`userId`,`postId`) VALUES (?)"
    const values = [
        req.body.desc,
        moment(Date.now()).format('YYYY-MM-DD HH-mm-ss'),
        req.body.user.id,
        req.body.postId,
    ]
    connection.query(q, [values], (err, data) => {
        if (err) { return res.status(500).json(err) }
        return res.status(200).json(data)
    })
}