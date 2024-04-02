import Express from 'express'
import { getPosts, addPost, getProfilePosts } from '../controllers/postsController.js'
const router = Express.Router()

router.get('/posts', getPosts)
router.post('/post', addPost)
router.get('/post:id', getProfilePosts)

export default router