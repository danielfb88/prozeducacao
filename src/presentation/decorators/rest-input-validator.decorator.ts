import 'reflect-metadata'
import { validate } from 'class-validator'
import { badRequest } from '@/presentation/helpers/http-helper'

export function RestInputValidator<T> (Type: (new () => T)) {
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

        return badRequest(resultErrors)
      }

      return method.apply(this, arguments)
    }
  }
}
