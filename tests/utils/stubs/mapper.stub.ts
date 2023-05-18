import { Mapper } from 'src/shared/interfaces'

const stub = Object.freeze({
  map: jest.fn().mockImplementation((v) => v)
})

export const mapperStub = (): any => stub as Mapper<any, any>
