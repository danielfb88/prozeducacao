/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

export function DateValidator (validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: DateConstraint
    })
  }
}

@ValidatorConstraint({ name: 'DateValidator' })
export class DateConstraint implements ValidatorConstraintInterface {
  validate (value: any, args: ValidationArguments) {
    const date = new Date(value)
    return !isNaN(date.getTime())
  }

  defaultMessage (args: ValidationArguments) {
    return `Value '${args.value}' is not a valid Date`
  }
}
