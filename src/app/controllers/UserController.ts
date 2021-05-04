import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'

class UserController {
  index (request: Request, response: Response) {
    response.send({ userID: request.userId })
  }

  async store (request: Request, response: Response): Promise<Response> {
    const repository = getRepository(User)
    const { email, password } = request.body

    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return response.sendStatus(409)
    }

    const user = repository.create({ email, password })
    await repository.save(user)

    return response.json(user)
  }
}

export default new UserController()
