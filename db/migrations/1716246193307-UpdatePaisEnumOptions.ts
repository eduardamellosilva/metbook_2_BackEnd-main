import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePaisEnumOptions1716246193307 implements MigrationInterface {
    name = 'UpdatePaisEnumOptions1716246193307';

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            ALTER TABLE "usuarios"
            DROP COLUMN "pais";
        `);

        await queryRunner.query(`
            ALTER TABLE "usuarios"
            ADD COLUMN "pais" "public"."pais_enum";
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            ALTER TABLE "usuarios"
            DROP COLUMN "pais";
        `);

        await queryRunner.query(`
            ALTER TABLE "usuarios"
            ADD COLUMN "pais" "public"."pais_enum";
        `);
    }
}
