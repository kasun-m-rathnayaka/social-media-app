import Express from "express";
import userRouter from "./routes/auth.js";
import commetRouter from "./routes/comments.js"
import likesRouter from "./routes/likes.js"
import postsRouter from "./routes/posts.js"
import relationsRouter from "./routes/relations.js"
import user from "./routes/user.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import { storage, uploadFiles } from "./routes/files.js";
import multer from "multer";

const app = Express()

//middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(Express.json())
app.use(cors(
    { origin: "http://localhost:3000" }
))
app.use(cookieParser())
const upload = multer({ storage: storage })

app.post('/api/upload', upload.single("file"), uploadFiles)
app.use('/api/auth', userRouter)
app.use('/api', commetRouter)
app.use('/api', likesRouter)
app.use('/api', postsRouter)
app.use('/api', relationsRouter)
app.use('/api', user)

app.listen(3001, () => {
    console.log('App listening on port 3001!');
});