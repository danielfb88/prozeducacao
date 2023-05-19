export class NotFoundError extends Error {
  constructor (message: string) {
    super('Not found error')
    this.name = 'NotFoundError'
    this.message = message
  }
}
