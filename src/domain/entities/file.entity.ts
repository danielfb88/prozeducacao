import { IFileParams } from '../interfaces/file.params.interface'

export class File {
  path: string

  constructor (params: IFileParams) {
    Object.assign(this, params)
  }
}
