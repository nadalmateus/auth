import { Router } from 'express'
import AuthController from '../app/controllers/AuthController'
import UserController from '../app/controllers/UserController'
import authMiddleware from '../app/middlewares/authMiddleware'

const routes = Router()

routes.post('/users', UserController.store)
routes.post('/auth', AuthController.auth)
routes.get('/users', authMiddleware, UserController.index)

export default routes
