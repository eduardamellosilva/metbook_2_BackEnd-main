/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuario.service';
import { UsuariosEntity } from './usuario.entity';
import { UsuariosController } from './usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosEntity])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService], 
})
export class UsuariosModule {}