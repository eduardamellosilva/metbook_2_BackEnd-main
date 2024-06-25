/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivrosService } from './livro.service';
import { LivroController } from './livro.controller';
import { LivroEntity } from './livro.entity';
import { AutorEntity } from '../autor/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LivroEntity, AutorEntity])],
  providers: [LivrosService],
  controllers: [LivroController],
  exports: [LivrosService],
})
export class LivroModule {}
