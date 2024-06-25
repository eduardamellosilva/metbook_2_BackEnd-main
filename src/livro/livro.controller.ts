import { Controller, Get, Query, Param, Body, Post, Put, Delete, Logger, NotFoundException } from '@nestjs/common';
import { LivrosService } from './livro.service';
import { LivroDto } from './livro.dto';
import { LivroEntity } from './livro.entity';

@Controller('livros')
export class LivroController {
  private readonly logger = new Logger(LivroController.name);
  
  constructor(private livroService: LivrosService) {}

  @Get('search')
  async searchByTitle(@Query('q') query: string): Promise<LivroEntity[]> {
    return this.livroService.searchByName(query);
  }

  @Get()
  async findAll(): Promise<LivroEntity[]> {
    return this.livroService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
      try {
          const livro = await this.livroService.findById(id);
          return livro;
      } catch (error) {
          throw new NotFoundException(error.message);
      }
  }

  @Delete(':id')
  async deleteLivro(@Param('id') id: string) {
    return this.livroService.remove(id);
  }


  @Post()
    async create(@Body() livroDto: LivroDto) {
        this.logger.debug(`Requisição recebida para criar livro: ${JSON.stringify(livroDto)}`);
        return this.livroService.create(livroDto);
    }
    

    @Put(':id')
    async update(@Param('id') id: string, @Body() livroDto: LivroDto) {
        try {
            const updatedLivro = await this.livroService.update({ id, ...livroDto });
            return updatedLivro;
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}
