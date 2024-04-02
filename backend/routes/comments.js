import Express from 'express'
import { getComment, addComment } from '../controllers/commentsController.js'
const router = Express.Router()

router.get('/comments', getComment)
router.post('/addcomment', addComment)

export default router