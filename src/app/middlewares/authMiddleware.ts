import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface ITokenPayload {
  id: string;
  iat: number;
  exp: number
}

export default function authMiddleware (request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers

  if (!authorization) {
    return response.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, 'yourSecret')
    const { id } = data as ITokenPayload

    request.userId = id

    console.log(id)

    return next
  } catch {
    return response.sendStatus(401)
  }
}
