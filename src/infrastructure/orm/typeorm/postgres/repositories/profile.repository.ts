import { DataSource, DeepPartial, Repository } from 'typeorm'
import { Profile } from '../entities/profile.entity'

// TODO implements IProfileRepository
export class ProfileRepository {
  private readonly repository: Repository<Profile>

  constructor (
    private readonly datasource: DataSource
  ) {
    this.repository = this.datasource.getRepository(Profile)
  }

  async save (entity: DeepPartial<Profile>): Promise<Profile> {
    return this.repository.save(entity)
  }

  async findAll (): Promise<Profile[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<Profile> {
    return this.repository.findOneBy({ id })
  }

  async findByEmail (email: string): Promise<Profile> {
    return this.repository.findOneBy({ id: email })
  }
}
