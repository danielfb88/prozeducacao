import { GenderEnum } from '@/shared/enum/gender.enum'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({unique: true})
  email: string

  @Column({ type: 'enum', enum: CivilStatusEnum })
  civil_status: CivilStatusEnum

  @Column()
  cpf: string

  @Column()
  rg: string

  @Column()
  birthdate: Date

  @Column({ type: 'enum', enum: GenderEnum })
  gender: GenderEnum

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date
}
