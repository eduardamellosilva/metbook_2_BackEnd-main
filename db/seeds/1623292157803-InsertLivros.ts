/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertLivrosSeed1623292157803 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "livros" (id, titulo, subtitulo, "numeroPaginas", isbn, editora, "anoLancamento", preco) VALUES
            (uuid_generate_v4(), 'O Senhor dos Anéis', 'A Sociedade do Anel', 576, '9788578270698', 'Martins Fontes', 2009,  60),
            (uuid_generate_v4(), 'Harry Potter e a Pedra Filosofal', NULL, 208, '9788532530789', 'Rocco', 2000,  40),
            (uuid_generate_v4(), 'O Código Da Vinci', NULL, 480, '9788576653721', 'Sextante', 2004, 50),
            (uuid_generate_v4(), 'A Game of Thrones', NULL, 694, '9780553573404', 'Bantam', 1997,  55),
            (uuid_generate_v4(), 'The Catcher in the Rye', NULL, 214, '9780316769488', 'Little, Brown and Company', 1951, 30)
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM "livros" WHERE isbn IN (
                '9788578270698',
                '9788532530789',
                '9788576653721',
                '9780553573404',
                '9780316769488'
            )
        `);
  }
}
