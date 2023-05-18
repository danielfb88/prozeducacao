import 'reflect-metadata'
import { validate } from 'class-validator'
import { InputValidatorError } from '../errors/input-validator.error'

export function GRPCInputValidator<T> (Type: (new () => T)) {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value

    descriptor.value = async function () {
      const dto = Object.assign(new Type(), arguments[0])

      const errors = await validate(dto)

      if (errors.length > 0) {
        const resultErrors = errors.map(e => {
          return {
            property: e.property,
            constraints: e.constraints
          }
        })

        throw new InputValidatorError(resultErrors)
      }

      return method.apply(this, arguments)
    }
  }
}
