import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';

import { UsuariosService } from './usuario.service';
import { UsuariosDto } from './usuario.dto';
import { UsuariosEntity } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) {}

    @Get('search') 
    search(@Query('q') query: string) {
        return this.usuariosService.search(query);
    }

    @Get()
    async findAll(): Promise<UsuariosEntity[]> {
        return this.usuariosService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.usuariosService.findById(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usuariosService.remove(id);
    }

    @Post()
    create(@Body() dto: UsuariosDto) {
        return this.usuariosService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UsuariosDto) {
        return this.usuariosService.update({ id, ...dto });
    }
}