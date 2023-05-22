import { IXlsReaderService } from '@/shared/interfaces/xls-reader-service.interface'
import { readXlsxFile } from 'read-excel-file/node'

export class XlsReaderService implements IXlsReaderService {
  async readFile (fileName: string, options: any): Promise<any> {
    const result = await readXlsxFile(fileName)
  }
}
