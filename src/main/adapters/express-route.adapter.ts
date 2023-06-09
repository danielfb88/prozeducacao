
import { IController } from '@/shared/interfaces/controller.interface'
import { Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {})
    }
    const httpResponse = await controller.handle(request)
    if ((httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) || httpResponse.statusCode === 400) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
