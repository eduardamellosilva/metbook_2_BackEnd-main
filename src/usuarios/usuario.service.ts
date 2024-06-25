import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { Repository, Like } from 'typeorm'; 
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosEntity } from './usuario.entity';
import { UsuariosDto } from './usuario.dto';

@Injectable()
export class UsuariosService {
    
    constructor(
        @InjectRepository(UsuariosEntity)
        private usuariosRepository: Repository<UsuariosEntity>,
    ) {}

    async findAll(): Promise<UsuariosEntity[]> {
        return this.usuariosRepository.find();
    }

    async findById(id: string): Promise<UsuariosEntity> {
        const findOne = await this.usuariosRepository.findOne({ where: { id } });

        if (!findOne) {
          throw new NotFoundException('Usuário não encontrado com o id ' + id);
        }
        return findOne;
    }

    async remove(id: string) {
        const findById = await this.findById(id);

        await this.usuariosRepository.remove(findById);

        return { ...findById, id };
    }

    async create(dto: UsuariosDto) {
        const newUsuarios = this.usuariosRepository.create(dto);

        if (newUsuarios.nome && newUsuarios.nome.length > 100) {
            throw new BadRequestException('O nome do autor deve possuir apenas 100 caracteres');
        }

        if (newUsuarios.email && newUsuarios.email.length > 50) {
            throw new BadRequestException('O e-mail deve possuir apenas 50 caracteres');
        }

        this.validaUsuario(newUsuarios);

        return this.usuariosRepository.save(newUsuarios);
    }

    async update(usuarios: UsuariosDto) {
        await this.findById(usuarios.id);
    
        this.validaUsuario(usuarios);
    
        return this.usuariosRepository.save(usuarios);
    }

    async search(query: string): Promise<UsuariosEntity[]> {
        if (!query) {
            throw new BadRequestException('O parâmetro de consulta "q" é obrigatório');
        }

        return this.usuariosRepository.find({
            where: {
                nome: Like(`%${query}%`), // Buscar por nome que contenha o texto da consulta
            },
        });
    }

    private validaUsuario(usuarios: UsuariosEntity | UsuariosDto) {
        this.validaUsuarioNascimento(usuarios);
    }
    
    private validaUsuarioNascimento(usuarios: UsuariosEntity | UsuariosDto) {
        const dataAtual = new Date();
        const dataNascimento = new Date(usuarios.dataNascimento);

        const diferencaAno = dataAtual.getUTCFullYear() - dataNascimento.getUTCFullYear();

        if (diferencaAno < 18) {
            throw new BadRequestException('O usuário deve ter no mínimo 18 anos - Conforme o Código Civil (Lei nº 10.406/02)');
        } else if (diferencaAno === 18) {
            const meses =
            dataAtual.getUTCMonth() + 1 - (dataNascimento.getUTCMonth() + 1);

            if (meses < 0) {
                throw new BadRequestException(`O usuário deve ter no mínimo 18 anos - Conforme o Código Civil (Lei nº 10.406/02) - (Faltando ainda ${meses * -1} mes(es))`,);
            } else if (dataAtual.getUTCMonth() - dataNascimento.getUTCMonth() === 0) {
                const dias = dataAtual.getUTCDate() - dataNascimento.getUTCDate();

                if (dias < 0) {
                    throw new BadRequestException(`O usuário deve ter no mínimo 18 anos - Conforme o Código Civil (Lei nº 10.406/02) - (Faltando  ${dias * -1} dia(s))`,);
                }
            }
        }
    }
}
