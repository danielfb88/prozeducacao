import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'
import { GenderEnum } from '@/shared/enum/gender.enum'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({unique: true})
  email: string

  @Column({ name: 'civil_status' })
  civilStatus: CivilStatusEnum

  @Column()
  cpf: string

  @Column()
  rg: string

  @Column({ name: 'birth_date' })
  birthDate: Date

  @Column()
  gender: GenderEnum

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
  deletedAt: Date
}
