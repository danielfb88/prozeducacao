import { DataSource, DeepPartial, Repository } from 'typeorm'
import { Profile } from '../entities/profile.entity'

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
    return this.repository.findOneBy({ email })
  }

  async delete (id: string): Promise<void> {
    await this.repository.delete({ id })
  }

  async softDelete (id: string): Promise<void> {
    await this.repository.softDelete({ id })
  }
}
