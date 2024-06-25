/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLivroAutorRelation1716246193306 implements MigrationInterface {
    name = 'CreateLivroAutorRelation1716246193306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "livro_autores" ("livroId" uuid NOT NULL, "autorId" uuid NOT NULL, CONSTRAINT "PK_2c09c3ef88e970d0d0e86c6350a" PRIMARY KEY ("livroId", "autorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_livro_autores_livroId" ON "livro_autores" ("livroId") `);
        await queryRunner.query(`CREATE INDEX "IDX_livro_autores_autorId" ON "livro_autores" ("autorId") `);
        await queryRunner.query(`ALTER TABLE "livro_autores" ADD CONSTRAINT "FK_livro_autores_livroId" FOREIGN KEY ("livroId") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livro_autores" ADD CONSTRAINT "FK_livro_autores_autorId" FOREIGN KEY ("autorId") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livro_autores" DROP CONSTRAINT "FK_livro_autores_autorId"`);
        await queryRunner.query(`ALTER TABLE "livro_autores" DROP CONSTRAINT "FK_livro_autores_livroId"`);
        await queryRunner.query(`DROP INDEX "IDX_livro_autores_autorId"`);
        await queryRunner.query(`DROP INDEX "IDX_livro_autores_livroId"`);
        await queryRunner.query(`DROP TABLE "livro_autores"`);
    }
}