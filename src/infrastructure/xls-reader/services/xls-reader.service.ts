import { IXlsReaderService } from '@/shared/interfaces/xls-reader-service.interface'
import xlsx from 'node-xlsx'
import path from 'path'

export class XlsReaderService implements IXlsReaderService {
  async readFile (fileName: string): Promise<any> {
    const result = await xlsx.parse(path.join(__dirname, '/../../../../public/xls/', fileName))
    return result
  }
}
