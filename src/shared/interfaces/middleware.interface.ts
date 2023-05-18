import { IHttpResponse } from './http-response.interface'

export interface IMiddleware<T = any> {
  handle: (httpRequest: T) => Promise<IHttpResponse>
}
