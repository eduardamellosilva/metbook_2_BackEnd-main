import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  ValidateNested,
} from 'class-validator';

import { AutorDto } from 'src/autor/autor.dto';

export class LivroDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString({ message: 'O título deve conter apenas letras!' })
  @IsNotEmpty({ message: 'O título deve ser informado!' })
  titulo: string;
  
  @IsOptional()
  @IsString()
  subtitulo?: string;
  
  @IsInt()
  numeroPaginas: number;
  
  @IsString({ message: 'O ISBN deve ser preenchido! Quantidade máxima de caracteres: 13' })
  @IsNotEmpty({ message: 'O ISBN deve ser preenchido! (ISBN: é um padrão criado com o objetivo de fornecer uma espécie de "RG" para publicações monográficas, como livros, artigos e apostilas)' })
  isbn: string;
  
  @IsString({ message: 'O nome da Editora deve conter apenas letras!' })
  @IsNotEmpty({ message: 'A Editora deve ser informada!' })
  editora: string;
  
  @IsInt({ message: 'O ano de lançamento do livro, deve conter apenas números inteiros!' })
  anoLancamento: number;
    
  @IsInt({ message: 'O preço deve ser um número inteiro!' })
  preco: number;

  @ValidateNested({ each: true })
  autores: AutorDto[];
}
