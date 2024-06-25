import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePaisEnumOptions1716246193308 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Adiciona os novos valores ao enum pais_enum
        await queryRunner.query(`
            DO $$ 
            BEGIN
                IF EXISTS (
                    SELECT 1
                    FROM   pg_type
                    WHERE  typname = 'pais_enum'
                ) THEN
                    BEGIN
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Argentina''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Estados Unidos''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Canadá''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Paraguai''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Uruguai''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Itália''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Portugal''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Espanha''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Alemanha''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Rússia''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Coreia do Sul''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Japão''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''China''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Austrália''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''México''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''África do Sul''';
                        EXECUTE 'ALTER TYPE "public"."pais_enum" ADD VALUE ''Outros''';

                    END;
                END IF;
            END$$;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // A reversão não é necessária neste caso, porque estamos apenas adicionando valores ao enum
    }
}
