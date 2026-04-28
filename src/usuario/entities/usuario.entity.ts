import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Apresentacao } from '../../apresentacao/entities/apresentacao.entity';

@Entity('tb_usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  email: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @Column({ length: 5000, nullable: true })
  foto: string;

  @OneToMany(() => Apresentacao, (apresentacao) => apresentacao.usuario)
  concertos: Apresentacao[];
}
