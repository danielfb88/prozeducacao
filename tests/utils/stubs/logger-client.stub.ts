import winston from 'winston'

const stub = Object.freeze({
  error: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn()
})

export const loggerClientStub = jest
  .fn()
  .mockReturnValue(stub) as () => winston.Logger
