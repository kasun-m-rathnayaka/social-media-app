import { connection } from "../connect.js"

export const getLikes = (req, res) => {
    const q = "select id,userId from likes where postId = ?"
    connection.query(q, [req.query.postId], (err, data) => {
        if (err) { return res.status(500).json(err) }
        return res.status(200).json(data)
    })
}