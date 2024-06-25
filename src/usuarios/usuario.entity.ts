/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SexoEnum } from './genero.enum';
import { PaisEnum } from './pais.enum';

@Entity({ name: 'usuarios' })
export class UsuariosEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    nome: string;

    @Column({ length: 100 })
    email: string;

    @Column({ type: 'date', name: 'data_nascimento', nullable: true })
    dataNascimento: Date;
 
    @Column({
      type: 'enum',
      enum: SexoEnum,
      default: SexoEnum.FEMININO,
      nullable: true,
    })
    genero: SexoEnum;

    @Column({
      type: 'enum',
      enum: PaisEnum,
      default: PaisEnum.BRASIL,
      nullable: true,
    })
    pais: PaisEnum;

}