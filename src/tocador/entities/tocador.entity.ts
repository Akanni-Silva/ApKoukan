import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Tocador {
  @PrimaryGeneratedColumn()
  
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  
  nome: string;

  @Column({ type: 'bigint' })
  
  posicao: number;
}
