import { Entity } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';

@Entity('tb_instrumento')
export class Instrumento extends Tocador {}
