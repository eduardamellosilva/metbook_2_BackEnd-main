/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AutorModule } from './autor/autor.module';
import { LivroModule } from './livro/livro.module';
import { UsuariosModule } from './usuarios/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AutorModule,
    LivroModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
