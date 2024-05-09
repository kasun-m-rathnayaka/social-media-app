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