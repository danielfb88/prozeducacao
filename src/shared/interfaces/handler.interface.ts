import IHandlerImplementation from './handler-implementation.interface'

export interface IHandler {
  getService: <T>() => T
  getImplementation: () => IHandlerImplementation
}
