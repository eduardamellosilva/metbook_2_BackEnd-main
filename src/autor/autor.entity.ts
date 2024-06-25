/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';
import { NacionalidadeEnum } from './nacionalidade.enum';
import { LivroEntity } from '../livro/livro.entity';

@Entity({ name: 'autores' })
export class AutorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'date', name: 'data_nascimento', nullable: true })
  dataNascimento: Date;

  @Column({
    type: 'enum',
    enum: GeneroEnum,
    default: GeneroEnum.OUTRO,
    nullable: true,
  })
  genero: GeneroEnum;

  @Column({
    type: 'enum',
    enum: NacionalidadeEnum,
    default: NacionalidadeEnum.BRASILEIRO,
    nullable: true,
  })
  nacionalidade: NacionalidadeEnum;

  @Column({ nullable: true })
  linkInstagram: string;

  @Column({ length: 1000 })
  biografia: string;

  @ManyToMany(() => LivroEntity, (livro) => livro.autores)
  livros: LivroEntity[];
}