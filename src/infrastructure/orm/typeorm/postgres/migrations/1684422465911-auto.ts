import { MigrationInterface, QueryRunner } from 'typeorm'

export class Auto1684422465911 implements MigrationInterface {
  name = 'Auto1684422465911'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TYPE "public"."profile_civilstatus_enum" AS ENUM(\'SOLTEIRO\', \'CASADO\', \'DIVORCIADO\')')
    await queryRunner.query('CREATE TYPE "public"."profile_gender_enum" AS ENUM(\'MASCULINO\', \'FEMININO\')')
    await queryRunner.query('CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "civilStatus" "public"."profile_civilstatus_enum" NOT NULL, "cpf" character varying NOT NULL, "rg" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "gender" "public"."profile_gender_enum" NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_3825121222d5c17741373d8ad13" UNIQUE ("email"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "profile"')
    await queryRunner.query('DROP TYPE "public"."profile_gender_enum"')
    await queryRunner.query('DROP TYPE "public"."profile_civilstatus_enum"')
  }
}
