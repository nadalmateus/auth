import bcryptjs from 'bcryptjs'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getRepository } from 'typeorm'
import User from '../models/User'

class AuthController {
  async auth (request: Request, response: Response): Promise<Response> {
    const repository = getRepository(User)
    const { email, password } = request.body

    const user = await repository.findOne({ where: { email } })

    if (!user) {
      return response.sendStatus(401)
    }

    const isAValidePassword = await bcryptjs.compare(password, user.password)

    if (!isAValidePassword) {
      return response.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, 'yourSecret', { expiresIn: '1d' })

    delete user.password

    return response.json({
      user,
      token
    })
  }
}

export default new AuthController()
