import { XlsReaderService } from './xls-reader.service'

jest.mock('node-xlsx', () => {
  return {
    parse: jest.fn().mockResolvedValue({})
  }
})

describe('XlsReaderService', () => {
  let service: XlsReaderService

  beforeEach(() => {
    jest.clearAllMocks()

    service = new XlsReaderService()
  })

  it('should be definided', () => {
    expect(service).toBeDefined()
  })

  it('should be defined method extractAlunos', () => {
    expect(service.readFile).toBeDefined()
  })

  it('should be able to process when method extractAlunos is executed', async () => {
    const result = await service.readFile('any-fileName')

    expect(result).toEqual({})
  })
})
