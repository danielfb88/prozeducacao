import { IController } from 'src/shared/interfaces/controller.interface'

const stub = Object.freeze({
  handle: jest.fn().mockImplementation((v) => v)
})

export const controllerStub = (): any => stub as IController<any>
