import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAutorEntity1716246193303 implements MigrationInterface {
    name = 'CreateAutorEntity1716246193303';

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE TYPE "public"."autores_genero_enum" AS ENUM('M', 'F', 'I')`);
        await queryRunner.query(`CREATE TYPE "public"."autores_nacionalidade_enum" AS ENUM('Brasileiro', 'Americano', 'Inglês', 'Francês', 'Alemão', 'Japonês', 'Chinês', 'Canadense', 'Australiano', 'Coreano', 'Italiano', 'Outro')`);


        await queryRunner.query(`
            CREATE TABLE "autores" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "data_nascimento" date,
                "genero" "public"."autores_genero_enum" DEFAULT 'I',
                "nacionalidade" "public"."autores_nacionalidade_enum" DEFAULT 'Brasileiro',
                "linkInstagram" character varying,
                "biografia" character varying(1000),
                CONSTRAINT "PK_9b2f94f9cb9f11a13b8e5d8c712" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "autores"`);
        await queryRunner.query(`DROP TYPE "public"."autores_genero_enum"`);
        await queryRunner.query(`DROP TYPE "public"."autores_nacionalidade_enum"`);
    }
}
