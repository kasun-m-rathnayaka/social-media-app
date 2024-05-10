import moment from "moment/moment.js"
import { connection } from "../connect.js"

export const getPosts = (req, res) => {
    const q = "select u.id as userId, name, profilepic, p.id as postId,p.desc,p.img from posts as p join users as u on(u.id = p.userId) left join relationships as r on (u.id = r.followedUser) where r.followerUser = ? or p.userId = ? order by p.createdAt desc"
    connection.query(q, [req.query.id, req.query.id], (err, data) => {
        if (err) { return res.status(500).json(err) }
        return res.status(200).json(data)
    })
}

export const getProfilePosts = (req, res) => {
    const q = "select u.id as userId, name, profilepic, p.id as postId,p.desc,p.img from posts as p join users as u on(u.id = p.userId) p.userId = ? order by p.createdAt desc"
    connection.query(q, [req.query.id], (err, data) => {
        if (err) { return res.status(500).json(err) }
        return res.status(200).json(data)
    })
}

export const addPost = (req, res) => {
    const q = "INSERT INTO posts(`desc`,`img`,`userId`,`createdAt`) VALUES (?)"
    const values = [
        req.body.desc,
        req.body.img,
        req.body.user.id,
        moment(Date.now()).format('YYYY-MM-DD HH-mm-ss')
    ]
    connection.query(q, [values], (err, data) => {
        if (err) { return res.status(500).json(err) }
        return res.status(200).json(data)
    })
}

export const deletePost = (req, res) => {
    const q = "DELETE FROM posts WHERE `id` =? AND `userId` =?";
   
    connection.query(q, [
        req.body.id,
        req.body.userid
    ], (err, data) => {
        if (err) { return res.status(500).json(err) }
        if (data.affectedRows > 0 ) return res.status(200).json("Post has been deleted")
        return res.status(403).json([
            req.body
        ])
    })
}