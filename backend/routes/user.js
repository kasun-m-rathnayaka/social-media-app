import Express from 'express'
import { getUser ,updateUser } from '../controllers/userController.js'
const router = Express.Router()

router.get('/user/:id', getUser)
router.put('/user', updateUser)

export default router