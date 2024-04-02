import Express from 'express'
import { getLikes } from '../controllers/likesController.js'
const router = Express.Router()

router.get('/likes', getLikes)

export default router