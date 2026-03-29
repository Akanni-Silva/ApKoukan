import { Entity } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';

@Entity('tb_artista')
export class Artista extends Tocador {}
