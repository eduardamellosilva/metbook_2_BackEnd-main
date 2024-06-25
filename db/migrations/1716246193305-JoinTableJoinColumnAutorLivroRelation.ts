/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class JoinTableJoinColumnAutorLivroRelation1716246193305 implements MigrationInterface {
    name = 'JoinTableJoinColumnAutorLivroRelation1716246193305';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const columns = await queryRunner.query(`
            SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'livros' AND column_name = 'autorId'
        `);

        if (columns.length > 0) {
            await queryRunner.query(`
                ALTER TABLE "livros"
                ADD CONSTRAINT "FK_autor_livro"
                FOREIGN KEY ("autorId") REFERENCES "autores"("id") ON DELETE CASCADE
            `);
        } else {
            console.log('Column "autorId" not found in table "livros". Skipping migration...');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livros" DROP CONSTRAINT "FK_autor_livro"`);
    }
}
