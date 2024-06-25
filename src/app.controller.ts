/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuariosService } from './usuarios/usuario.service';
import { UsuariosEntity } from './usuarios/usuario.entity';
import { LivroEntity } from './livro/livro.entity';
import { LivrosService } from './livro/livro.service';
import { AutorService } from './autor/autor.service';
import { AutorEntity } from './autor/autor.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usuariosService: UsuariosService,
    private readonly livrosService: LivrosService,
    private readonly autoresService: AutorService, 
  ) {}

  @Get('autores') 
  async getAutores(): Promise<AutorEntity[]> {
    return this.autoresService.findAll(); 
  }

  @Get('livros')
  async getLivros(): Promise<LivroEntity[]> {
    return this.livrosService.findAll(); 
  }

  @Get('usuarios') 
  async getUsuarios(): Promise<UsuariosEntity[]> {
    return this.usuariosService.findAll(); 
  }
}