import { IUseCase } from 'src/shared/interfaces'

const stub = Object.freeze({
  execute: jest.fn()
})

export const useCaseStub = (): any => stub as IUseCase<any>
