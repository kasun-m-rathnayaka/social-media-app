import Express from 'express'
import { getPosts, addPost, getProfilePosts, deletePost } from '../controllers/postsController.js'
const router = Express.Router()

router.get('/posts', getPosts)
router.post('/post', addPost)
router.get('/post:id', getProfilePosts)
router.delete('/post', deletePost)

export default router