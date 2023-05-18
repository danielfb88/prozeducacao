export interface ICacheService {
  set: (key: string, value: string | number | Buffer) => Promise<'OK' | null>
  get: (key: string) => Promise<string | number | Buffer>
  quit: () => void
}
