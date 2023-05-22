import { IXlsReaderService } from '../../shared/interfaces/xls-reader-service.interface'

const stub = Object.freeze({
  readFile: jest.fn()
})

export const xlsReaderServiceStub = jest
  .fn()
  .mockReturnValue(stub) as () => IXlsReaderService
