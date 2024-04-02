import multer from "multer"

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

export const uploadFiles = (req, res) => {
    res.status(200).json(req.file.filename)
}
