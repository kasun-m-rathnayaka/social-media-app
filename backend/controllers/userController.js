import { connection } from "../connect.js";

export const getUser = (req, res) => {
    const userId = req.params.id;
    const q = "SELECT * FROM social.users where id = ?;"

    connection.query(q,userId,(error,data)=>{
        if (error) return res.status(500).json(error)
        const {password, ...info} = data[0]
        return res.json(info)        
    })
}

export const updateUser = (req, res) => {
    const q = "UPDATE users SET  name = ?, dsc = ?, coverpic = ?, profilepic = ? WHERE id = ?"

    connection.query(q,[
        req.body.name,
        req.body.dsc,
        req.body.coverpic,
        req.body.profilepic,
        req.body.user.id,
    ],(error,data)=>{
        if (error) return res.status(500).json(error)
        if(data.affectedRows > 0) return res.json("Updated")        
    })
}