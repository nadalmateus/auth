import { Request, Response } from 'express'

class UserController {
  save (request: Request, response: Response) {
    return response.send('ok')
  }
}

export default new UserController()
