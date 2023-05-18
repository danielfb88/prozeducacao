import { DeepPartial } from './deep-partial.interface'
import { Profile } from '@/domain/entities/profile.entity'

export interface IProfileRepository {
  save: (entity: DeepPartial<Profile>) => Promise<Profile>
  findAll: () => Promise<Profile[]>
  findById: (id: string) => Promise<Profile>
  findByEmail: (email: string) => Promise<Profile>
}
