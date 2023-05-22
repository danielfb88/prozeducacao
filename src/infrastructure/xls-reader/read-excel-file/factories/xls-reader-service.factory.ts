import { IXlsReaderService } from '@/shared/interfaces/xls-reader-service.interface'
import { XlsReaderService } from '../services/xls-reader.service'

export const getXlsReaderService = (): IXlsReaderService =>
  new XlsReaderService()
