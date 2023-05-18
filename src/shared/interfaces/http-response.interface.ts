export interface IHttpResponse<T = any> {
  body: T
  statusCode: number
}
