import { Profile } from '@/domain/entities/profile.entity'
import { DeepPartial } from './deep-partial.interface'

export interface IProfileRepository {
  save: (entity: DeepPartial<Profile>) => Promise<Profile>
  findAll: () => Promise<Profile[]>
  findById: (id: string) => Promise<Profile>
  findByEmail: (email: string) => Promise<Profile>
  delete: (id: string) => Promise<void>
  softDelete: (id: string) => Promise<void>
}
