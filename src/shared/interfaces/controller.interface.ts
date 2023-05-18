import { IHttpResponse } from './http-response.interface'

export interface IController<Params = any> {
  handle: (request: Params) => Promise<IHttpResponse>
}
