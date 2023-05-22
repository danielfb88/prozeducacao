
export interface IXlsReaderService {
  readFile: (fileName: string, options: any) => Promise<any>
}
