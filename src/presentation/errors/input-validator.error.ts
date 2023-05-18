import { IInputErrorMessage } from '../interfaces/input-error-message.interface'

export class InputValidatorError extends Error {
  constructor (errorMessages: IInputErrorMessage[]) {
    super('Input validator error')
    this.name = 'InputError'
    this.message = JSON.stringify(errorMessages)
  }
}
