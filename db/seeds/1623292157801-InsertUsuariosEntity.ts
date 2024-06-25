/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertAutoresEntity1623292157801 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "autores" (id, nome, data_nascimento, genero, nacionalidade, "linkInstagram", biografia) VALUES
            ('1c90634a-94fc-47c1-ba67-27a227884b1f', 'João Silva', '1990-01-01', 'M', 'Brasileiro', 'joao_instagram', 'Biografia do João Silva'),
            ('2c90634a-94fc-47c1-ba67-27a227884b2f', 'Maria Souza', '1992-05-15', 'F', 'Brasileiro', 'maria_instagram', 'Biografia da Maria Souza'),
            ('3c90634a-94fc-47c1-ba67-27a227884b3f', 'Pedro Oliveira', '1985-11-30', 'M', 'Outro', 'pedro_instagram', 'Biografia do Pedro Oliveira')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM "autores" WHERE id IN 
            ('1c90634a-94fc-47c1-ba67-27a227884b1f', 
             '2c90634a-94fc-47c1-ba67-27a227884b2f', 
             '3c90634a-94fc-47c1-ba67-27a227884b3f')
        `);
    }
}
