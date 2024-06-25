/* eslint-disable prettier/prettier */
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import { GeneroEnum } from './genero.enum';
import { NacionalidadeEnum } from './nacionalidade.enum';
export class AutorDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString({ message: 'O nome deve conter apenas letras' })
    @IsNotEmpty({ message: 'O nome deve ser informado' })
    nome: string;

    @IsDateString()
    @IsOptional()
    dataNascimento: Date;

    @IsEnum(GeneroEnum, { message: 'O gênero deve ser apenas M, F ou I.' })
    @IsOptional()
    genero: GeneroEnum;

    @IsEnum(NacionalidadeEnum, { message: 'A nacionalidade deve ser apenas Brasileiro, Americano, Inglês, Francês, Alemão, Japonês, Chinês, Canadense, Australiano, Coreano, Italiano, Outro. ' })
    @IsOptional()
    nacionalidade: NacionalidadeEnum;

    @IsString()
    @IsOptional()
    linkInstagram: string;
      
    @IsString()
    @IsOptional()
    biografia: string;
}