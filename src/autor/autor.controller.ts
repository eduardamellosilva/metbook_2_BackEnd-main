/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorDto } from './autor.dto';
import { AutorEntity } from './autor.entity';

@Controller('autores')
export class AutorController {
    constructor(private autorService: AutorService) {}

    @Get('search')
    async searchByName(@Query('q') query: string): Promise<AutorEntity[]> {
        return this.autorService.search(query);
    }

    @Get()
    async findAll(): Promise<AutorEntity[]> {
        return this.autorService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<AutorEntity> {
        return this.autorService.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<{ id: string }> {
        return this.autorService.remove(id);
    }

    @Post()
    async create(@Body() dto: AutorDto): Promise<AutorEntity> {
        return this.autorService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: AutorDto): Promise<AutorEntity> {
        return this.autorService.update({ id, ...dto });
    }
}