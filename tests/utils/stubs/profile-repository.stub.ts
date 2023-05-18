import { IProfileRepository } from 'src/shared/interfaces/profile-repository.interface'

const stub = Object.freeze({
  save: jest.fn(),
  findAll: jest.fn(),
  findById: jest.fn(),
  findByEmail: jest.fn()
})

export const profileRepositoryStub = (): any => stub as IProfileRepository
