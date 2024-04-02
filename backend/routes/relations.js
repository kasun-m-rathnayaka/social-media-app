import Express from 'express'
import { getRelations } from '../controllers/relationsController.js'
const router = Express.Router()

router.get('/relations', getRelations)

export default router