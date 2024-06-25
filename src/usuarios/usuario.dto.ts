/* eslint-disable prettier/prettier */
import {
    IsDateString,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

import { SexoEnum } from './genero.enum';
import { PaisEnum } from './pais.enum';

export class UsuariosDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString ({ message: 'O nome deve conter apenas letras' })
    @IsNotEmpty ({ message: 'O nome deve ser informado' })
    nome: string;

    @IsString ({ message: 'O e-mail deve conter apenas letras' })
    @IsNotEmpty ({ message: 'O e-mail deve ser informado' })
    email: string;

    @IsDateString()
    @IsOptional()
    dataNascimento: Date;

    @IsEnum (SexoEnum, { message: 'O genêro deve ser apenas F, M, T, N ou O' })
    @IsOptional()
    genero: SexoEnum;

    @IsEnum(PaisEnum, { message: 'O pais deve ser apenas B, E, C, P, U, I, O, R, A, S, J, H, T, M, F'})
    @IsOptional()
    pais: PaisEnum;
}