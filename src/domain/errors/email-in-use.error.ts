export class EmailInUseError extends Error {
  constructor (email?: string) {
    super(`The received email is already in use: ${email}`)
    this.name = 'EmailInUseError'
  }
}
