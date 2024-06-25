import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLivroEntity1716246193304 implements MigrationInterface {
    name = 'CreateLivroEntity1716246193304';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "livros" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "titulo" character varying(255) NOT NULL,
                "subtitulo" character varying(255),
                "numeroPaginas" integer NOT NULL,
                "isbn" character varying(13) NOT NULL,
                "editora" character varying(100) NOT NULL,
                "anoLancamento" integer NOT NULL,
                "preco" integer NOT NULL,
                CONSTRAINT "PK_9b2f94f9cb9f11a13b8e5d8c713" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "livros"`);
    }
}

