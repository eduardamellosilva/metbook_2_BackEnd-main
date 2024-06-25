
import { Genero } from './genero.enum';
import { AutorEntity } from '../autor/autor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutorDto } from 'src/autor/autor.dto';

@Entity('livros')
export class LivroEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: Genero,
    nullable: true,
  })

  @Column()
  titulo: string;

  @Column({ nullable: true })
  subtitulo: string;

  @Column()
  numeroPaginas: number;

  @Column()
  isbn: string;

  @Column()
  editora: string;

  @Column()
  anoLancamento: number;

  @Column('decimal')
  preco: number;

  @ManyToMany(() => AutorEntity, (autor) => autor.livros)
  @JoinTable({
    name: 'livro_autores', // Tabela de junção
    joinColumn: { name: 'livroId' }, // Coluna que referencia o ID do livro
    inverseJoinColumn: { name: 'autorId' }, // Coluna que referencia o ID do autor
  })
  autores: AutorEntity[]; // Armazena os autores relacionados ao livro

}
